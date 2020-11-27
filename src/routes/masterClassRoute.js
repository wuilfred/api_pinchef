module.exports = (api) => {
    const masterClassController = require('../app/api/controllers/masterClassController');
    const authorize = require('../middleware/authorize');

    // Create master_clase
    api.post('/master_clase/create/:id', authorize, masterClassController.create);

    // Detail master_clase
    api.get('/master_clase/detail/:id', authorize, masterClassController.detail);

    // Get all master_clase chef
    api.get('/master_clase/getAll/:id', authorize, masterClassController.getAll);

    // Update master_clase
    api.put('/master_clase/update/:id', authorize, masterClassController.update);

    // Delete master_clase
    api.delete('/master_clase/delete/:id', authorize, masterClassController.delete);

};