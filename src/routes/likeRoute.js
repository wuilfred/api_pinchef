module.exports = (api) => {
    const likeController = require('../app/api/controllers/likeController');
    const authorize = require('../middleware/authorize');

    // Action like or dislike in a post
    api.post('/like/like_or_dislike_post/:id', authorize, likeController.likeOrDislikePost);

    // Action like or dislike in a post
    api.get('/like/getLikesByPost/:id', authorize, likeController.qtyLikesPost);

}