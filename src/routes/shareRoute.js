module.exports = (api) => {
    const cartController = require('../app/api/controllers/cartController');
    const authorize = require('../middleware/authorize');
    

// Create share post
    api.post('/share/create', authorize, cartController.createSchema, cartController.create);

// Get all share post
    api.get('/share/shareByPost/:id', authorize, cartController.detail);
};