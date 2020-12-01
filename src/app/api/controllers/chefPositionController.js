const chefPositionModel = require('../models/chefPositionModel');
const pool = require("../../../helpers/db");
const Joi = require("joi");

module.exports = {
    create,
    update,
    detail,
    getAllPosition,
    delete: _delete,
};

/**
* @api {post} /chefPosition/create/  Create Position
* @apiVersion 0.0.1
* @apiGroup Chef Position
* @apiName CreateChefPosition
* @apiUse token
*
* @apiDescription Create Position
*
* @apiParam {string} name  Name
* @apiParam {string} description  Description
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
        "insertId": 2,
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
    const chefposition = req.body;
    try {
        await validatorChefPosition(chefposition);
        const conn = await pool.getConnection();
        const result = await conn.query(chefPositionModel.Create(chefposition));
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
* @api {put} /chefPosition/update/:id_chef_position  Update 
* @apiVersion 0.0.1
* @apiGroup Chef Position
* @apiName UpdateChefPosition
* @apiUse token
*
* @apiDescription Update a Chef Position
*
* @apiParam {string} name  Name
* @apiParam {string} description  Description
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
        "insertId": 2,
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
    const id_chefPosition = req.params.id;
    const chefPosition = req.body;
    try {
        await validatorChefPosition(chefPosition);
        const conn = await pool.getConnection();
        const result = await conn.query(chefPositionModel.Update(id_chefPosition, chefPosition));
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
* @api {get} /chefPosition/detail/:id_chef_position  Detail 
* @apiVersion 0.0.1
* @apiGroup Chef Position
* @apiName DetailChefPosition
* @apiUse token
*
* @apiDescription Get a Chef Position
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
            "id_food_item": 5,
            "name": "Lorem",
            "description": "Lorem ipsum dolor",
            "day": 1,
            "hour": "00:00:04",
            "price": 55,
            "picture": "picture",
            "created": "2020-11-27T21:17:28.000Z",
            "updated": "2020-11-28T15:11:29.000Z",
            "chef_id_chef": 1
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
    const id_chefPosition = req.params.id;
    try {
        const conn = await pool.getConnection();
        const result = await conn.query(chefPositionModel.Detail(id_chefPosition));
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
* @api {get} /chefPosition/getAllPosition/  Get Positions 
* @apiVersion 0.0.1
* @apiGroup Chef Position
* @apiName GetChefPosition
* @apiUse token
*
* @apiDescription Get all positions
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
            "id_food_item": 5,
            "name": "Lorem",
            "description": "Lorem ipsum dolor",
            "day": 1,
            "hour": "00:00:04",
            "price": 55,
            "picture": "picture",
            "created": "2020-11-27T21:17:28.000Z",
            "updated": "2020-11-28T15:11:29.000Z",
            "chef_id_chef": 1
        },
        {
            "id_food_item": 3,
            "name": "Lorem",
            "description": "Lorem ipsum dolor",
            "day": 1,
            "hour": "00:00:04",
            "price": 55,
            "picture": "picture",
            "created": "2020-11-27T21:17:28.000Z",
            "updated": "2020-11-28T15:11:29.000Z",
            "chef_id_chef": 1
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
async function getAllPosition(req, res, next) {
    try {
        const conn = await pool.getConnection();
        const result = await conn.query(chefPositionModel.getAllPositions());
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
* @api {delete} /chefPosition/delete/:id_chef_position  Delete 
* @apiVersion 0.0.1
* @apiGroup Chef Position
* @apiName DeleteChefPosition
* @apiUse token
*
* @apiDescription Delete a position 
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
    const id_chef_position = req.params.id;
    try {
        const conn = await pool.getConnection();
        const result = await conn.query(chefPositionModel.Delete(id_chef_position));
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

async function validatorChefPosition(chefPosition) {
    const schema = Joi.object({
        position: Joi.string().required(),
        description: Joi.string().required(),
    });

    await schema.validateAsync(chefPosition);
}