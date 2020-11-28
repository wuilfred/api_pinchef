module.exports = (api) => {
    const cartController = require('../app/api/controllers/cartController');
    const authorize = require('../middleware/authorize');
    

// Create cart
    api.post('/cart/create', authorize, cartController.createSchema, cartController.create);

// Detail cart
    api.get('/cart/detail/:id', authorize, cartController.detail);

// Detail cart
//    api.put('/cart/update/:id', authorize, cartController.update);

// Delete cart
//    api.delete('/cart/delete/:id', authorize, cartController.delete);

};