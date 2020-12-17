const reviewsModel = require('../models/reviewModel');
const pool = require("../../../helpers/db");
const Joi = require("joi");

module.exports = {
    create,
    update,
    detail,
    delete: _delete,
};

/**
* @api {post} /review/create/:id_chef  Create review
* @apiVersion 0.0.1
* @apiGroup Review
* @apiName CreateReview
* @apiUse token
*
* @apiDescription Create review
*
* @apiParam {string} name  Name
* @apiParam {string} description  Description
* @apiParam {string} raiting  Raiting
* @apiParam {string} followers  Followers
* @apiParam {string} share  Share
* @apiParam {string} likes  Likes
*
* @apiSuccessExample Success-Response:
* HTTP/1.1 200 OK
*
* {
*"status": true,
 "message": "Successful Operation",
 "data": [
     {
        "affectedRows": 1,
        "insertId": 14,
        "warningStatus": 0
    }
 ]
* }
*
* @apiErrorExample {json} Error-Response:
*  HTTP/1.1 500 Bad Request
* {
*    "status": false
*    "message": "Operation failed"
*    "detail": "Error Message"
*    
* }
*/
async function create(req, res, next) {
    const id_chef = req.params.id;
    const reviews = req.body;
    try {
        await validatorReviews({ ...reviews, id_chef });
        const isReview = await checkReviewExist(id_chef);

        // Check review not exists
        if (isReview[0].reviewExist === 0) {
            const conn = await pool.getConnection();
            const result = await conn.query(reviewsModel.Create(id_chef, reviews));
            conn.release();

            res.status(200).json({
                status: true,
                message: "Successful Operation",
                data: result,
            });
        } else {
            res.status(400).json({
                status: false,
                message: "Operation failed",
                details: 'The review already exists'
            });
        }

    } catch (error) {
        res.status(500).json({
            status: false,
            message: "Operation failed",
            details: error.message,
        });
    }
}

/**
* @api {put} /review/update/:id_chef  Update Review
* @apiVersion 0.0.1
* @apiGroup Review
* @apiName UpdateReview
* @apiUse token
*
* @apiDescription Update review
*
* @apiParam {string} name  Name
* @apiParam {string} description  Description
* @apiParam {string} raiting  Raiting
* @apiParam {string} followers  Followers
* @apiParam {string} share  Share
* @apiParam {string} likes  Likes
*
* @apiSuccessExample Success-Response:
* HTTP/1.1 200 OK
*
* {
*"status": true,
 "message": "Successful Operation",
 "data": [
     {
        "affectedRows": 1,
        "insertId": 0,
        "warningStatus": 0
    }
 ]
* }
*
* @apiErrorExample {json} Error-Response:
*  HTTP/1.1 500 Bad Request
* {
*    "status": false
*    "message": "Operation failed"
*    "detail": "Error Message"
*    
* }
*/
async function update(req, res, next) {
    const id_chef = req.params.id;
    const reviews = req.body;
    try {
        await validatorReviews({...reviews, id_chef});
        const conn = await pool.getConnection();
        const result = await conn.query(reviewsModel.Update(id_chef, reviews));
        conn.release();

        res.status(200).json({
            status: true,
            message: "Successful Operation",
            data: result,
        });

    } catch (error) {
        res.status(500).json({
            status: false,
            message: "Operation failed",
            details: error.message,
        });
    }
}

/**
* @api {get} /review/detail/:id_chef  Detail Review
* @apiVersion 0.0.1
* @apiGroup Review
* @apiName DetailReview
* @apiUse token
*
* @apiDescription Get review
*
* @apiSuccessExample Success-Response:
* HTTP/1.1 200 OK
*
{
    "status": true,
    "message": "Successful Operation",
    "data": [
        {
            "id_chef_reviews": 4,
            "name": "mmhh",
            "description": "mmhh",
            "raiting": "5",
            "followers": "5",
            "share": "5",
            "likes": 5,
            "created": "2020-11-27T19:44:28.000Z",
            "updated": "2020-12-17T04:35:32.000Z",
            "chef_id_chef": 1
        }
    ]
}
*
* @apiSuccessExample Success-Response:
* HTTP/1.1 200 OK
*{
    "status": true,
    "message": "Not record found!",
    "data": []
}
*
* @apiErrorExample {json} Error-Response:
*  HTTP/1.1 500 Bad Request
* {
*    "status": false
*    "message": "Operation failed"
*    "detail": "Error Message"
*    
* }
*/
async function detail(req, res, next) {
    const id_chef = req.params.id;
    try {
        const conn = await pool.getConnection();
        const result = await conn.query(reviewsModel.Detail(id_chef));
        conn.release();

        res.status(200).json({
            status: true,
            message: result.length > 0 ? "Successful Operation" : "Not record found!",
            data: result,
        });

    } catch (error) {
        res.status(500).json({
            status: false,
            message: "Operation failed",
            details: error.message,
        });
    }
}

async function checkReviewExist(id_chef) {
    try {
        const conn = await pool.getConnection();
        const result = await conn.query(reviewsModel.CheckReviewExist(id_chef));
        conn.release();

        return result;
    } catch (error) {
        throw new Error(error);
    }
}

/**
* @api {delete} /review/delete/:id  Delete Review
* @apiVersion 0.0.1
* @apiGroup Review
* @apiName DeleteReview
* @apiUse token
*
* @apiDescription Delete review 
*
* @apiSuccessExample Success-Response:
* HTTP/1.1 200 OK
*
* {
*"status": true,
 "message": "Successful Operation",
 "data": [
     {
        "affectedRows": 1,
        "insertId": 0,
        "warningStatus": 0
     }
 ]
* }
*
* @apiErrorExample {json} Error-Response:
*  HTTP/1.1 500 Bad Request
* {
*    "status": false
*    "message": "Operation failed"
*    "detail": "Error Message"
* }
*/
async function _delete(req, res, next) {
    const id_chef = req.params.id;
    try {
        const conn = await pool.getConnection();
        const result = await conn.query(reviewsModel.Delete(id_chef));
        conn.release();

        res.status(200).json({
            status: true,
            message: "Successful Operation",
            data: result,
        });

    } catch (error) {
        res.status(500).json({
            status: false,
            message: "Operation failed",
            details: error.message,
        });
    }
}

async function validatorReviews(review) {
    const schema = Joi.object({
        name: Joi.string().required(),
        description: Joi.string().required(),
        raiting: Joi.number().required(),
        followers: Joi.number().required(),
        share: Joi.number().required(),
        likes: Joi.number().required(),
        id_chef: Joi.number().required()
    });

    await schema.validateAsync(review);
}