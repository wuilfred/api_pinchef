module.exports = (api) => {
    const loginController = require('../app/api/controllers/loginController');
    

    // Authenticate
    api.post('/login', loginController.authenticate);

    // Register
    api.post('/register', loginController.registerSchema, loginController.register);

    // Verify email
    api.post('/verify-email', loginController.verifyEmailSchema, loginController.verifyEmail);

};

