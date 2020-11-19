'use strict'
const gCode = require('../../../utils/generateCode');
const service = require('../../../services/userService');

function authenticate(req, res, next){
    const { email, password } = req.body;
    let vCode = gCode(4, 'numeric');
  
    try{
        Service.authenticate({ email, password})
        .then(({ refreshToken, ...account }) => {
            setTokenCookie(res, refreshToken);
            res.json(account);
        })
        .catch(next);
    }catch(error){
        console.log(error);
    }
}

module.exports = {
    authenticate
};