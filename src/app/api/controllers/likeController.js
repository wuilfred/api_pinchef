const pool = require("../../../helpers/db");
const likeModel = require('../models/likeModel');
const Joi = require("joi");

module.exports = {
    likeOrDislike,
    qtyLikes
}

/**
* @api {post} /like/like_or_dislike_post/:id  Like Post 
* @apiVersion 0.0.1
* @apiGroup Like
* @apiName LikeOrDislike
* @apiUse token
*
* @apiDescription Action Like or Dislike Post
*
* @apiParam {string} type  Type (chef | master_class | food_item | food_service | post)
* @apiParam {number} id  Id according to type
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
async function likeOrDislike(req, res, next) {
    const id = req.params.id;
    const like = req.body;

    try {
        const schema = Joi.object({
            type: Joi.string().required(),
            id_user: Joi.number().required()
        });
        await schema.validateAsync(like);

        const hasLike = await checklikeExist(id, like.id_user, like.type);
        const conn = await pool.getConnection();
        let result;

        if (hasLike[0] !== undefined) {
            const status = hasLike[0].status === 0 ? 1 : 0;
            result = await conn.query(likeModel.changeActionLike(hasLike[0].id_like, status));
            conn.release();

        } else {
            result = await conn.query(likeModel.createLike(id, like));
            conn.release();
        }

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


async function checklikeExist(id, id_user, type) {
    try {
        const conn = await pool.getConnection();
        const result = await conn.query(likeModel.checklikeExist(id, id_user, type));
        conn.release();

        return result;
    } catch (error) {
        throw new Error(error);
    }
}

/**
* @api {get} /like/getLikes/:id Get Likes  
* @apiVersion 0.0.1
* @apiGroup Like
* @apiName GetLikes
* @apiUse token
*
* @apiDescription Get likes 
*
* @apiParam {string} type  Type (chef | master_class | food_item | food_service | post)
*
* @apiSuccessExample Success-Response:
* HTTP/1.1 200 OK
*
{
    "status": true,
    "message": "Successful Operation",
    "data": [
        {
            "likesQty": 1
        }
    ]
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
async function qtyLikes(req, res, next) {
    const id = req.params.id;
    const { type } = req.body;
    console.log('asd', id, type);
    try {
        const schema = Joi.object({
            type: Joi.string().required(),
            id: Joi.number().required(),
        });
        await schema.validateAsync({ type, id });

        const conn = await pool.getConnection();
        const result = await conn.query(likeModel.getLikes(id, type));
        conn.release();
        console.log(result);

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