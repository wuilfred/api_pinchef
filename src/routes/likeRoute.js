module.exports = (api) => {
    const likeController = require('../app/api/controllers/likeController');
    const authorize = require('../middleware/authorize');

    // Action like or dislike
    api.post('/like/like_or_dislike/:id', authorize, likeController.likeOrDislike);

    // Get likes
    api.get('/like/getLikes/:id', authorize, likeController.qtyLikes);

}