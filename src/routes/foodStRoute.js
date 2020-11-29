module.exports = (api) => {
    const foodSTController = require('../app/api/controllers/foodSTController');
    const authorize = require('../middleware/authorize');
    

// Create FS
    api.post('/foodst/create', authorize, foodSTController.createSchema, foodSTController.create);

// Detail FS
    api.get('/foodst/detail/:id', authorize, foodSTController.detail);

// Detail FS
    api.put('/foodst/update/:id', authorize, foodSTController.updateSchema,foodSTController.update);

// Delete FS
    api.delete('/foodst/delete/:id', authorize, foodSTController.delete);

// Detail FS
    api.get('/foodst', authorize, foodSTController.getAll);

};