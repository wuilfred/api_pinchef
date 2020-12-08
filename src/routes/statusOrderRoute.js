module.exports = (api) => {
    const statusOrderController = require('../app/api/controllers/statusOrderController');
    const authorize = require('../middleware/authorize');
    
// Create statusOrder
    api.post('/statusOrder/create/:id', authorize, statusOrderController.createSchema, statusOrderController.create);

// Detail statusOrder
    api.get('/statusOrder/detail/:id', authorize, statusOrderController.detail);

// Update statusOrder
   api.put('/statusOrder/update/:id', authorize, statusOrderController.updateSchema, statusOrderController.update);

// Delete statusOrder
   api.delete('/statusOrder/delete/:id', authorize,statusOrderController.deleteSchema, statusOrderController.delete);

};