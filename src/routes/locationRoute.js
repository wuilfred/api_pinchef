module.exports = (api) => {
    const locationController = require('../app/api/controllers/locationController');
    const authorize = require('../middleware/authorize');

    // Get all country 
    api.get('/location/getAllCountry/', authorize, locationController.getAllCountry);

    // Get all city for country
    api.get('/location/getAllCityForCountry/:id', authorize, locationController.getAllCityForCountry);

}