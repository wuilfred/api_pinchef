var validator = require('validator');

class User {

    construct() {
        this.rs = '';
    }

    Create(user) {
        if(user.isSocialAuth == null){
            this.rs =   `INSERT INTO user ( email, 
                                            password, 
                                            verificationToken, 
                                            verified, 
                                            role, 
                                            acceptTerms, 
                                            passwordReset, 
                                            created, 
                                            updated, 
                                            isVerified,
                                            is_social_auth,
                                            id_social_hash)
                    VALUES ('${user.email}',
                    '${user.password}',
                    '${user.verificationToken}',
                    '${user.verified}',
                    '${user.role}',
                    '${user.acceptTerms}',
                    '${user.passwordReset}', 
                    now(),  
                    now(), 
                    '${user.isVerified}',
                    'null',
                    'null');
                    SELECT LAST_INSERT_ID() AS userId`;   
        }else{
            this.rs =   `INSERT INTO user ( email, 
                                            password, 
                                            verificationToken, 
                                            verified, 
                                            role, 
                                            acceptTerms, 
                                            passwordReset, 
                                            created, 
                                            updated, 
                                            isVerified,
                                            is_social_auth,
                                            id_social_hash)
                    VALUES ('${user.email}',
                    '${user.password}',
                    '${user.verificationToken}',
                    '${user.verified}',
                    '${user.role}',
                    '${user.acceptTerms}',
                    '${user.passwordReset}', 
                    now(),  
                    now(), 
                    '${user.isVerified}',
                    '${user.isSocialAuth}',
                    '${user.idSocialHash}');
                    SELECT LAST_INSERT_ID() AS userId`;   
        }
        return this.rs;
    }

    Read() {
        this.rs = `SELECT * FROM user`;
        return this.rs;
    }

    ReadOne(email){
        this.rs = `SELECT * FROM user where email = '${email}' limit 1;`;
       
        return this.rs;
    }

    UserExists(email){
        this.rs = `SELECT COUNT(*) as userExists FROM user where email = '${email}' limit 1;`;
       
        return this.rs;
    }

    GetVerificationToken(token){
        this.rs = `SELECT * FROM user where verificationToken = '${token}' limit 1;
                   SELECT COUNT(*) as tokenExists FROM user where verificationToken = '${token}' limit 1;`;
       
        return this.rs;
    }

    VerifyEmail(user){
        this.rs = `UPDATE user SET verificationToken='', verified=now(), isVerified='1' WHERE id_user = '${user.id_user}'`;

        return this.rs;
    }

    SetResetToken(user, resetToken){
        this.rs = `UPDATE user SET resetToken='${resetToken}', resetTokenExpires = DATE_ADD(NOW(), INTERVAL 24 HOUR) WHERE id_user = '${user.id_user}';
                   SELECT * FROM user where id_user = '${user.id_user}' LIMIT 1`;

        return this.rs;
    }

    GetResetToken(resetToken){
        this.rs = `SELECT * FROM user where resetToken = '${resetToken}' AND  resetTokenExpires > now() limit 1;`;
       
        return this.rs;
    }

    ChangePassword(user, passwordHash){
        this.rs = `UPDATE user SET resetToken='', passwordReset=NOW(), password = '${passwordHash}' WHERE id_user = '${user.id_user}'`;

        return this.rs;
    }

    Update(id, user) {
        this.rs =   `UPDATE user SET email='${user.email}', password='${user.password}', verificationToken='${user.verificationToken}',
                    verified='${user.verified}', resetToken='${user.resetToken}', resetTokenExpires='${user.resetTokenExpires}',
                    passwordReset='${user.passwordReset}', updated='${user.updated}', isVerified='${user.iisVerified}'
                    WHERE id_user = '${id}'`;
        return this.rs;
    }

    Delete(id) {
        console.log(id);
        if (!validator.isEmpty(id, {ignore_whitespace: false})) {
            this.rs = `DELETE FROM user WHERE id_user = '${id}'`;
        } else {
            this.rs = 'Error during remove the data!';
        }
        return this.rs;
    }
}


let getUser= new User();
module.exports = getUser;
