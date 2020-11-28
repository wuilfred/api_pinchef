module.exports = (api) => {
    const cousineController = require('../app/api/controllers/cousineController');
    const authorize = require('../middleware/authorize');
    

// Create cart
    api.post('/cousine/create', authorize, cousineController.createSchema, cousineController.create);

// Detail cart
    api.get('/cousine/detail/:id', authorize, cousineController.detail);

// Detail cart
    api.put('/cousine/update/:id', authorize, cousineController.updateSchema,cousineController.update);

// Delete cart
    api.delete('/cousine/delete/:id', authorize, cousineController.deleteSchema, cousineController.delete);

};