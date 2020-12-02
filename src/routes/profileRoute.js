module.exports = (api) => {
    const profileController = require('../app/api/controllers/profileController');
    const authorize = require('../middleware/authorize');
    
// Create Profile
    api.post('/profile/create/:id', authorize, profileController.create);

// Detail Profile
    api.get('/profile/detail/:id', authorize, profileController.detail);

// Update Profile
    api.put('/profile/update/:id', authorize, profileController.update);

// Delete Profile
    api.delete('/profile/delete/:id', authorize, profileController.delete);

// Upload Photo
    api.post('/profile/upload/:id', authorize, profileController.uploadPhoto);

};