module.exports = (api) => {
    const chefPositionController = require('../app/api/controllers/chefPositionController');
    const authorize = require('../middleware/authorize');

    // Create chefPosition
    api.post('/chefPosition/create/', authorize, chefPositionController.create);

    // Detail chefPosition
    api.get('/chefPosition/detail/:id', authorize, chefPositionController.detail);

    // Get all chefPosition chef
    api.get('/chefPosition/getAllPosition/', authorize, chefPositionController.getAllPosition);

    // Update chefPosition
    api.put('/chefPosition/update/:id', authorize, chefPositionController.update);

    // Delete chefPosition
    api.delete('/chefPosition/delete/:id', authorize, chefPositionController.delete);

};