module.exports = (api) => {
    const serviceAvailability = require('../app/api/controllers/chefServiceController');
    const authorize = require('../middleware/authorize');

    // Enable or Disable Service
    api.post('/chefService/enableOrDisableService/:id', authorize, serviceAvailability.enableOrDisableService);

    // Create Service
    api.post('/chefService/create/', authorize, serviceAvailability.createSchema, serviceAvailability.create);

    // Detail Service
    api.get('/chefService/detail/:id', authorize, serviceAvailability.detail);

    // Detail Service
    api.get('/chefService/getAllService/', authorize, serviceAvailability.getAllService);

    // Update Service
    api.put('/chefService/update/:id',authorize, serviceAvailability.createSchema, serviceAvailability.update);

};