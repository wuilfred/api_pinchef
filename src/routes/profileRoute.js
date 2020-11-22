module.exports = (api) => {
    const profileController = require('../app/api/controllers/profileController');
    

// Create Profile
    api.post('/profile/create/:id', profileController.create);

// Detail Profile
    api.get('/profile/detail/:id', profileController.detail);

// Detail Profile
    api.put('/profile/update/:id', profileController.update);

// Delete Profile
    api.delete('/profile/delete/:id', profileController.delete);

};