module.exports = (api) => {
    const foodServiceController = require('../app/api/controllers/foodServiceController');
    const authorize = require('../middleware/authorize');

    // Create foodServices
    api.post('/foodService/create/:id', authorize, foodServiceController.create);

    // Detail foodServices
    api.get('/foodService/detail/:id', authorize, foodServiceController.detail);

    // Get all foodServices chef
    api.get('/foodService/getAllService/:id', authorize, foodServiceController.getAllService);

    // Update foodServices
    api.put('/foodService/update/:id', authorize, foodServiceController.update);

    // Delete foodServices
    api.delete('/foodService/delete/:id', authorize, foodServiceController.delete);

};