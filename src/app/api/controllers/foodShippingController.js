const foodShippingModel = require('../models/foodShippingModel ');
const pool = require("../../../helpers/db");
const Joi = require("joi");

module.exports = {
    create,
    update,
    detail,
    getShippingByItem,
    delete: _delete,
};

/**
* @api {post} /foodShipping/create/:id_food_item  Create Food Shipping
* @apiVersion 0.0.1
* @apiGroup Food Shipping
* @apiName CreateFoodShipping
* @apiUse token
*
* @apiDescription Create Food Shipping
*
* @apiParam {string} name  Name
* @apiParam {string} description  Description
* @apiParam {number} price  Price
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
    const id_food_item = req.params.id;
    const foodShipping = req.body;
    try {
        await validatorFoodShipping({...foodShipping, id_food_item});
        const conn = await pool.getConnection();
        const result = await conn.query(foodShippingModel.Create(id_food_item, foodShipping));
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
* @api {put} /review/update/:id_shipping  Update Food Shipping
* @apiVersion 0.0.1
* @apiGroup Food Shipping
* @apiName UpdateFoodShipping
* @apiUse token
*
* @apiDescription Update Food Shipping
*
* @apiParam {string} name  Name
* @apiParam {string} description  Description
* @apiParam {number} price  Price
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
    const id_shipping = req.params.id;
    const foodShipping = req.body;
    try {
        await validatorFoodShipping(foodShipping);
        const conn = await pool.getConnection();
        const result = await conn.query(foodShippingModel.Update(id_shipping, foodShipping));
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
* @api {get} /foodShipping/detail/:id_shipping  Detail Food Shipping
* @apiVersion 0.0.1
* @apiGroup Food Shipping
* @apiName DetailFoodShipping
* @apiUse token
*
* @apiDescription Get Food Shipping
*
* @apiSuccessExample Success-Response:
* HTTP/1.1 200 OK
*
{
    "status": true,
    "message": "Successful Operation",
    "data": [
        {
            "id_shipping": 1,
            "name": "example",
            "description": "lorem ipsum dolor",
            "price": 22,
            "created": "2020-12-17T05:57:16.000Z",
            "updated": "2020-12-17T05:57:18.000Z",
            "food_item_id_foot_item": 6
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
    const id_shipping = req.params.id;
    try {
        const conn = await pool.getConnection();
        const result = await conn.query(foodShippingModel.Detail(id_shipping));
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
* @api {get} /foodShipping/getShippingByItem/:id_food_item  Get Food Shipping by food item
* @apiVersion 0.0.1
* @apiGroup Food Shipping
* @apiName GetFoodShipping
* @apiUse token
*
* @apiDescription Get Food Shipping by food item
*
* @apiSuccessExample Success-Response:
* HTTP/1.1 200 OK
*
{
    "status": true,
    "message": "Successful Operation",
    "data": [
        {
            "id_shipping": 1,
            "name": "example",
            "description": "lorem ipsum dolor",
            "price": 22,
            "created": "2020-12-17T05:57:16.000Z",
            "updated": "2020-12-17T05:57:18.000Z",
            "food_item_id_foot_item": 6
        },
        {
            "id_shipping": 2,
            "name": "example2",
            "description": "lorem ipsum dolor2",
            "price": 22,
            "created": "2020-12-17T05:57:16.000Z",
            "updated": "2020-12-17T05:57:18.000Z",
            "food_item_id_foot_item": 6
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
async function getShippingByItem(req, res, next) {
    const id_food_item = req.params.id;
    try {
        const conn = await pool.getConnection();
        const result = await conn.query(foodShippingModel.getShippingByItem(id_food_item));
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
* @api {delete} /foodShipping/delete/:id_shipping  Delete Food Shipping
* @apiVersion 0.0.1
* @apiGroup Food Shipping
* @apiName DeleteFoodShipping
* @apiUse token
*
* @apiDescription Delete Food Shipping 
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
    const id_shipping = req.params.id;
    try {
        const conn = await pool.getConnection();
        const result = await conn.query(foodShippingModel.Delete(id_shipping));
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

async function validatorFoodShipping(foodShipping) {
    const schema = Joi.object({
        name: Joi.string().required(),
        description: Joi.string().required(),
        price: Joi.number(),
        id_food_item: Joi.number().required(),
    });

    await schema.validateAsync(foodShipping);
}