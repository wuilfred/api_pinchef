const postModel = require('../models/postModel');
const pool = require("../../../helpers/db");
const Joi = require("joi");

module.exports = {
    create,
    update,
    detail,
    getByProfile,
    delete: _delete,
    getComment
};

/**
* @api {post} /post/create/:id_user  Create 
* @apiVersion 0.0.1
* @apiGroup Post
* @apiName CreatePost
* @apiUse token
*
* @apiDescription Create a post
*
* @apiParam {string} name  Name
* @apiParam {string} description  Description
* @apiParam {string} photo  Photo
* @apiParam {string} location  Location
* @apiParam {string} privacy  Privascy
* @apiParam {string} time_zone  Timezone
* @apiParam {number} id_profile  Profile id
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
    const id_user = req.params.id;
    const post = req.body;
    try {
        await validatorPost(post);
        const conn = await pool.getConnection();
        const result = await conn.query(postModel.Create(id_user, post));
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
* @api {put} /post/update/:id_post  Update 
* @apiVersion 0.0.1
* @apiGroup Post
* @apiName UpdatePost
* @apiUse token
*
* @apiDescription Update a post
*
* @apiParam {string} name  Name
* @apiParam {string} description  Description
* @apiParam {string} photo  Photo
* @apiParam {string} location  Location
* @apiParam {string} status    Status
* @apiParam {string} privacy  Privascy
* @apiParam {string} time_zone  Timezone
* @apiParam {number} id_profile  Profile id
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
    const id_post = req.params.id;
    const post = req.body;
    try {
        await validatorPost(post);
        const conn = await pool.getConnection();
        const result = await conn.query(postModel.Update(id_post, post));
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
* @api {get} /post/detail/:id_post  Detail 
* @apiVersion 0.0.1
* @apiGroup Post
* @apiName DetailPost
* @apiUse token
*
* @apiDescription Get a post
*
* @apiSuccessExample Success-Response:
* HTTP/1.1 200 OK
*
* {
*"status": true,
 "message": "Successful Operation",
 "data": "status": true,
    "message": "Successful Operation",
    "data": [
        {
            "id_post": 16,
            "post_name": "Lorem",
            "description": "Lorem ipsum Dolor",
            "post_photo": "photo",
            "location": "Lorem ipsum",
            "status": 1,
            "privacy": "public",
            "time_zone": "GMT-5",
            "profile_id_profile": 32,
            "profile_user_id_user": 2,
            "profile_name": "John",
            "lastname": "Doe",
            "profile_photo": " photo",
            "likesQty": 5,
            "commentQty": 12,
            "shareQty": 40
        }
    ]
* }
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
    const id_post = req.params.id;
    try {
        const conn = await pool.getConnection();
        const result = await conn.query(postModel.Detail(id_post));
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

/**
* @api {get} /post/getByProfile/:id_profile  GetByProfile
* @apiVersion 0.0.1
* @apiGroup Post
* @apiName GetByProfile
* @apiUse token
*
* @apiDescription Get all post of the profile
*
* @apiSuccessExample Success-Response:
* HTTP/1.1 200 OK
*
* {
*"status": true,
 "message": "Successful Operation",
    "data": [
        {
            "id_post": 16,
            "post_name": "Lorem",
            "description": "Lorem ipsum Dolor",
            "post_photo": "photo",
            "location": "Lorem ipsum",
            "status": 1,
            "privacy": "public",
            "time_zone": "GMT-5",
            "profile_id_profile": 32,
            "profile_user_id_user": 2,
            "profile_name": "John",
            "lastname": "Doe",
            "profile_photo": " photo",
            "likesQty": 5,
            "commentQty": 12,
            "shareQty": 40
        },
        {
            "id_post": 17,
            "post_name": "Gourmet",
            "description": "Lorem ipsum Dolor",
            "post_photo": "photo",
            "location": "Lorem ipsum",
            "status": 1,
            "privacy": "public",
            "time_zone": "GMT-5",
            "profile_id_profile": 32,
            "profile_user_id_user": 2,
            "profile_name": "John",
            "lastname": "Doe",
            "profile_photo": " photo",
            "likesQty": 1,
            "commentQty": 8,
            "shareQty": 74
        }

    ]
* }
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
async function getByProfile(req, res, next) {
    const id_user = req.params.id;
    try {
        const conn = await pool.getConnection();
        const result = await conn.query(postModel.getByProfile(id_user));
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

/**
* @api {get} /post/getComment/:id_post  GetAllCommentsPost
* @apiVersion 0.0.1
* @apiGroup Post
* @apiName GetAllCommentsPost
* @apiUse token
*
* @apiDescription Get all comments of the post
*
* @apiSuccessExample Success-Response:
* HTTP/1.1 200 OK
*
* {
*"status": true,
 "message": "Successful Operation",
    "data": [
         {
            "id_post_comment": 5,
            "comment": "Lorem ipsum dolor1",
            "status": 1,
            "created": "2020-11-28T14:50:30.000Z",
            "updated": "2020-11-28T14:50:28.000Z",
            "post_id_post": 16,
            "user_id_user": 2
        },
        {
            "id_post_comment": 5,
            "comment": "Lorem ipsum dolor2",
            "status": 1,
            "created": "2020-11-28T14:50:30.000Z",
            "updated": "2020-11-28T14:50:28.000Z",
            "post_id_post": 16,
            "user_id_user": 12
        }
    ]
* }
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
async function getComment(req, res, next) {
    const id_post = req.params.id;
    try {
        const conn = await pool.getConnection();
        const result = await conn.query(postModel.getComments(id_post));
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

/**
* @api {delete} /post/delete/:id_post  Delete 
* @apiVersion 0.0.1
* @apiGroup Post
* @apiName DeletePost
* @apiUse token
*
* @apiDescription Delete a post 
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
    const id_post = req.params.id;
    try {
        const conn = await pool.getConnection();
        const result = await conn.query(postModel.Delete(id_post));
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

async function validatorPost(post) {
    const schema = Joi.object({
        name: Joi.string().required(),
        description: Joi.string().required(),
        photo: Joi.string().required(),
        location: Joi.string().required(),
        status: Joi.number(),
        privacy: Joi.string().required(),
        time_zone: Joi.string().required(),
        id_profile: Joi.number().required()
    });

    await schema.validateAsync(post);
}