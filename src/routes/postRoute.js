module.exports = (api) => {
    const postController = require('../app/api/controllers/postController');
    const authorize = require('../middleware/authorize');

    // Create Profile
    api.post('/post/create/:id', authorize, postController.create);

    // Detail post
    api.get('/post/detail/:id', authorize, postController.detail);

    // Get post by profile
    api.get('/post/getByProfile/:id', authorize, postController.getByProfile);

    // Get comments from a post
    api.get('/post/getComment/:id', authorize, postController.getComment);

    // Update post
    api.put('/post/update/:id', authorize, postController.update);

    // Delete post
    api.delete('/post/delete/:id',  authorize, postController.delete);

};