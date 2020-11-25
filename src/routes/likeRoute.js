module.exports = (api) => {
    const likeController = require('../app/api/controllers/likeController');


    // Action like or dislike in a post
    api.post('/like/like_or_dislike_post/:id', likeController.likeOrDislikePost);

}