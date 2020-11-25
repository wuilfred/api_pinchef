module.exports = (api) => {
    const commentController = require('../app/api/controllers/commentController');


    // Create comment post
    api.post('/comment/create/:id', commentController.create);

    // Update comment 
    api.put('/comment/update/:id', commentController.update);

    // Get comment 
    api.get('/comment/detail/:id', commentController.detail);

    // Get all comment of a post
    api.get('/comment/getByPost/:id', commentController.getByPost);

    // Delete comment 
    api.delete('/comment/delete/:id', commentController.delete);

}