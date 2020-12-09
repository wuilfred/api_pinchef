module.exports = (api) => {
    const foodItemController = require('../app/api/controllers/foodItemController');
    const authorize = require('../middleware/authorize');

    // Create foodItem
    api.post('/foodItem/create/:id', authorize, foodItemController.create);

    // Detail foodItem
    api.get('/foodItem/detail/:id', authorize, foodItemController.detail);

    // Get all foodItem to id chef
    api.get('/foodItem/getItemsByChef/:id', authorize, foodItemController.getItemsByChef);

    // Get all foodItem chef
    api.get('/foodItem/getAllItems', authorize, foodItemController.getAllItems);

    // Update foodItem
    api.put('/foodItem/update/:id', authorize, foodItemController.update);

    // Delete foodItem
    api.delete('/foodItem/delete/:id', authorize, foodItemController.delete);

};