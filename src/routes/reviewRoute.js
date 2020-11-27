module.exports = (api) => {
    const reviewContoller = require('../app/api/controllers/reviewController');
    const authorize = require('../middleware/authorize');

    // Create review chef
    api.post('/review/create/:id', authorize, reviewContoller.create);

    // Detail review chef
    api.get('/review/detail/:id', authorize, reviewContoller.detail);

    // Update review chef
    api.put('/review/update/:id', authorize, reviewContoller.update);

    // Delete review chef
    api.delete('/review/delete/:id', authorize, reviewContoller.delete);

};