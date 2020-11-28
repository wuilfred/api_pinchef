module.exports = (api) => {
    const dietaryController = require('../app/api/controllers/dietaryController');
    const authorize = require('../middleware/authorize');
    

// Create cart
    api.post('/dietary/create', authorize, dietaryController.createSchema, dietaryController.create);

// Detail cart
    api.get('/dietary/detail/:id', authorize, dietaryController.detail);

// Detail cart
    api.put('/dietary/update/:id', authorize, dietaryController.updateSchema,dietaryController.update);

// Delete cart
    api.delete('/dietary/delete/:id', authorize, dietaryController.delete);

};