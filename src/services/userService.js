const config = require('../config/config.json');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const crypto = require("crypto");
const sendEmail = require('../helpers/send-email');
const db = require('../helpers/db');
const Role = require('../helpers/role');
const pool = require('../helpers/db');
const userModel = require('../app/api/models/userModel');
const gCode = require('../utils/generateCode');
const { User } = require('../helpers/role');

module.exports = {
    authenticate,
    refreshToken,
    revokeToken,
    register,
    verifyEmail,
    forgotPassword,
    validateResetToken,
    resetPassword,
    create,
    update,
    delete: _delete
};

async function authenticate({ email, password }) {
    const conn = await db.getConnection();
    const account =  await conn.query(userModel.ReadOne(email));
    conn.release();

    if (account.length === 0 || account[0].isVerified === 0 || !(await bcrypt.compare(password, account[0].password))) {
        throw 'Email or password is incorrect';
    }
    // authentication successful so generate jwt and refresh tokens
    const jwtToken = generateJwtToken(account[0]);
    // return basic details and tokens
    return {
        ...basicDetails(account[0]),
        jwtToken
    };
}

async function refreshToken({ token, ipAddress }) {
    const refreshToken = await getRefreshToken(token);
    const account = await refreshToken.getAccount();

    // replace old refresh token with a new one and save
    const newRefreshToken = generateRefreshToken(account, ipAddress);
    refreshToken.revoked = Date.now();
    refreshToken.revokedByIp = ipAddress;
    refreshToken.replacedByToken = newRefreshToken.token;
    await refreshToken.save();
    await newRefreshToken.save();

    // generate new jwt
    const jwtToken = generateJwtToken(account);

    // return basic details and tokens
    return {
        ...basicDetails(account),
        jwtToken,
        refreshToken: newRefreshToken.token
    };
}

async function revokeToken({ token, ipAddress }) {
    const refreshToken = await getRefreshToken(token);

    // revoke token and save
    refreshToken.revoked = Date.now();
    refreshToken.revokedByIp = ipAddress;
    await refreshToken.save();
}

async function register(params, origin) {

    const conn = await db.getConnection();
    const user = await conn.query(userModel.UserExists(params.email));
    conn.release();

    if (user[0].userExists > 0) {
        return await sendAlreadyRegisteredEmail(params.email, origin);
    }

    const newUser = params;
    
    newUser.password =  await hash(params.password);
    //newUser.verificationToken = randomTokenString();
    newUser.verificationToken = gCode(6,'numeric');
    newUser.role = params.role;

    const userSave = await conn.query(userModel.Create(newUser));
    conn.release();
    
    if(userSave[0].affectedRows === 1){
        // send email
        await sendVerificationEmail(newUser, origin);
    }
}

async function verifyEmail(token) {

    const conn = await db.getConnection();
    const user = await conn.query(userModel.GetVerificationToken(token));
    conn.release();
    if (user[1][0].tokenExists === 0) throw 'Verification failed';

    if (user[1][0].tokenExists === 1 ) {
        await conn.query(userModel.VerifyEmail(user[0][0]));
        conn.release();
    }
}

async function forgotPassword({ email }, origin) {
    const conn = await db.getConnection();

    const user = await conn.query(userModel.ReadOne(email));
    conn.release();
        
    if (user.length === 0) return;
 
    if (user.length === 1) {
        const resetToken = randomTokenString();

        const savedUser = await conn.query(userModel.SetResetToken(user[0], resetToken));
        conn.release();
        const account = savedUser[1][0];
        await sendPasswordResetEmail(account, origin);
        conn.release();
    }
}

async function validateResetToken({ token }) {

    const conn = await db.getConnection();

    const account = await conn.query(userModel.GetResetToken(token));
    conn.release();

    if (account.length === 0) throw 'Invalid token';

    return account[0];
}

async function resetPassword({ token, password }) {
    const account = await validateResetToken({ token });

    // update password and remove reset token
    const passwordHash = await hash(password);

    const conn = await db.getConnection();
    await conn.query(userModel.ChangePassword(account,passwordHash));
    conn.release();
}

async function create(params) {
    // validate
    if (await db.Account.findOne({ where: { email: params.email } })) {
        throw 'Email "' + params.email + '" is already registered';
    }

    const account = new db.Account(params);
    account.verified = Date.now();

    // hash password
    account.passwordHash = await hash(params.password);

    // save account
    await account.save();

    return basicDetails(account);
}

async function update(id, params) {
    const account = await getAccount(id);

    // validate (if email was changed)
    if (params.email && account.email !== params.email && await db.Account.findOne({ where: { email: params.email } })) {
        throw 'Email "' + params.email + '" is already taken';
    }

    // hash password if it was entered
    if (params.password) {
        params.passwordHash = await hash(params.password);
    }

    // copy params to account and save
    Object.assign(account, params);
    account.updated = Date.now();
    await account.save();

    return basicDetails(account);
}

async function _delete(id) {
    const account = await getAccount(id);
    await account.destroy();
}

// helper functions

async function getAccount(id) {
    const account = await db.Account.findByPk(id);
    if (!account) throw 'Account not found';
    return account;
}

async function getRefreshToken(token) {
    const refreshToken = await db.RefreshToken.findOne({ where: { token } });
    if (!refreshToken || !refreshToken.isActive) throw 'Invalid token';
    return refreshToken;
}

async function hash(password) {
    return await bcrypt.hash(password, 10);
}

function generateJwtToken(account) {
    // create a jwt token containing the account id that expires in 24h
    return jwt.sign({ _id: account.id_user }, config.secret, { expiresIn: '24h' });
}

function generateRefreshToken(account, ipAddress) {
    // create a refresh token that expires in 7 days
    return new db.RefreshToken({
        accountId: account.id,
        token: randomTokenString(),
        expires: new Date(Date.now() + 7*24*60*60*1000),
        createdByIp: ipAddress
    });
}

function randomTokenString() {
    return crypto.randomBytes(40).toString('hex');
}

function basicDetails(account) {
    const { id, email, role, isVerified } = account;
    return { id, email, role, isVerified };
}

async function sendVerificationEmail(account, origin) {
    let message;
    if (origin) {
        const verifyUrl = `${origin}/api/verify-email/${account.verificationToken}`;
        message = `<p>Please click the below link to verify your email address:</p>
                   <p><a href="${verifyUrl}">${verifyUrl}</a></p>
                   <p>Or use the below token to verify your email address with the <code>/api/verify-email</code> api route:</p>
                   <p><b><code>${account.verificationToken}</code></b></p>`;
    } else {
        message = `<p>Please use the below token to verify your email address with the <code>/api/verify-email</code> api route:</p>
                   <p><code>${account.verificationToken}</code></p>`;
    }

    await sendEmail({
        to: account.email,
        subject: 'Sign-up Verification API - Verify Email',
        html: `<h4>Verify Email</h4>
               <p>Thanks for registering!</p>
               ${message}`
    });
}

async function sendAlreadyRegisteredEmail(email, origin) {
    let message;
    if (origin) {
        message = `<p>If you don't know your password please visit the <a href="${origin}/api/forgot-password">forgot password</a> page.</p>`;
    } else {
        message = `<p>If you don't know your password you can reset it via the <code>/api/forgot-password</code> api route.</p>`;
    }

    await sendEmail({
        to: email,
        subject: 'Sign-up Verification API - Email Already Registered',
        html: `<h4>Email Already Registered</h4>
               <p>Your email <strong>${email}</strong> is already registered.</p>
               ${message}`
    });
}

async function sendPasswordResetEmail(account, origin) {
    let message;
    if (origin) {
        const resetUrl = `${origin}/account/reset-password?token=${account.resetToken}`;
        message = `<p>Please click the below link to reset your password, the link will be valid for 1 day:</p>
                   <p><a href="${resetUrl}">${resetUrl}</a></p>`;
    } else {
        message = `<p>Please use the below token to reset your password with the <code>/api/reset-password</code> api route:</p>
                   <p><code>${account.resetToken}</code></p>`;
    }

    await sendEmail({
        to: account.email,
        subject: 'Sign-up Verification API - Reset Password',
        html: `<h4>Reset Password Email</h4>
               ${message}`
    });
}
