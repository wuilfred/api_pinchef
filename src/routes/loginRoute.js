module.exports = (api) => {
    const loginController = require('../app/api/controllers/loginController');
    

// Get Phone
    api.post('/login', loginController.login);

};

