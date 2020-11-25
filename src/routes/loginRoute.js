module.exports = (api) => {
    const loginController = require('../app/api/controllers/loginController');
    const authorize = require('../middleware/authorize');    

    // Authenticate
    api.post('/login', loginController.authenticateSchema, loginController.authenticate);

    // Register
    api.post('/register', loginController.registerSchema, loginController.register);

    // Verify email
    api.post('/verify-email', loginController.verifyEmailSchema, loginController.verifyEmail);

     // Forgot password
     api.post('/forgot-password',  loginController.forgotPasswordSchema, loginController.forgotPassword); 
     
     // Reset password
     api.post('/reset-password',  loginController.resetPasswordSchema, loginController.resetPassword); 

};

