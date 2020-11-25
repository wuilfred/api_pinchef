const jwt = require('jsonwebtoken');
const { secret } = require('../config/config.json');

module.exports = authorize;

function authorize(req, res, next) {
    const token = req.header('token');
    if (!token) return res.status(400).send({
        status: false,
        message: 'Access denied!'
    });

    try {
        const verified = jwt.verify(token, secret);
        req.user = verified;
        next();

    } catch (err) {
        return res.status(400).send('Invalid token!');
    }

}
