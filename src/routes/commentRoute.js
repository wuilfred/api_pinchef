module.exports = (api) => {
    const commentController = require('../app/api/controllers/commentController');
    const authorize = require('../middleware/authorize');


    // Create comment post
    api.post('/comment/create/:id', authorize, commentController.create);

    // Update comment 
    api.put('/comment/update/:id', authorize, commentController.update);

    // Get comment 
    api.get('/comment/detail/:id', authorize, commentController.detail);

    // Get all comment of a post
    api.get('/comment/getByPost/:id', authorize, commentController.getByPost);

    // Delete comment 
    api.delete('/comment/delete/:id', authorize, commentController.delete);

}