module.exports = (api) => {
    const postController = require('../app/api/controllers/postController');


    // Create Profile
    api.post('/post/create/:id', postController.create);

    // Detail post
    api.get('/post/detail/:id', postController.detail);

    // Get post by profile
    api.get('/post/getByProfile/:id', postController.getByProfile);

    // Get comments from a post
    api.get('/post/getComment/:id', postController.getComment);

    // Update post
    api.put('/post/update/:id', postController.update);

    // Delete post
    api.delete('/post/delete/:id', postController.delete);

};