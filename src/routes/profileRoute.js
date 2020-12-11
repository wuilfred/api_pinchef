module.exports = (api) => {
    const profileController = require('../app/api/controllers/profileController');
    const authorize = require('../middleware/authorize');
    
// Create Profile
    api.post('/profile/create/:id', authorize, profileController.create);

// Detail Profile
    api.get('/profile/detail/:id', authorize, profileController.detail);

// AllUsers Profile
    api.get('/profile/all_users', authorize, profileController.allUsers);

// Update Profile
    api.put('/profile/update/:id', authorize, profileController.update);

// Delete Profile
    api.delete('/profile/delete/:id', authorize, profileController.delete);

// Upload Photo Profile
    api.post('/profile/upload/picture_profile/:id', authorize, profileController.uploadPhotoProfile);

// Upload Photo Chef
    api.post('/profile/upload/picture_chef/:id', authorize, profileController.uploadPhotoChef);

};