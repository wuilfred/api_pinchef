module.exports = (api) => {
    const foodShippingController = require('../app/api/controllers/foodShippingController');
    const authorize = require('../middleware/authorize');

    // Create foodShipping
    api.post('/foodShipping/create/:id', authorize, foodShippingController.create);

    // Detail foodShipping
    api.get('/foodShipping/detail/:id', authorize, foodShippingController.detail);

    // Get all foodShipping of a item
    api.get('/foodShipping/getShippingByItem/:id', authorize, foodShippingController.getShippingByItem);

    // Update foodShipping
    api.put('/foodShipping/update/:id', authorize, foodShippingController.update);

    // Delete foodShipping
    api.delete('/foodShipping/delete/:id', authorize, foodShippingController.delete);

};