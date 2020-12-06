const foodServiceModel = require('../models/foodServiceModel');
const pool = require("../../../helpers/db");
const Joi = require("joi");
const uploadObj = require('../../../helpers/aws-sdk');

module.exports = {
    create,
    update,
    detail,
    getAllService,
    delete: _delete,
    getAll
};

/**
* @api {post} /foodService/create/:id_chef  Create 
* @apiVersion 0.0.1
* @apiGroup FoodService
* @apiName CreateFoodService
* @apiUse token
*
* @apiDescription Create a foodService
*
* @apiParam {string} service_type  Service Type
* @apiParam {string} description  Description
* @apiParam {date} day  Day
* @apiParam {date} hour  Hour
* @apiParam {price} price   Price
* @apiParam {string} picture  Picture
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
    const id_chef = req.params.id;
    const food_service = req.body;
    const file = req.files ? req.files.file : false ;
    try {
        await validatorFoodService({...food_service, id_chef});
        const conn = await pool.getConnection();
        const result = await conn.query(foodServiceModel.Create(id_chef, food_service));
        conn.release();

        if (file) {
          if (result.affectedRows === 1) {
            const id = result.insertId;
            await uploadObj(id, file, "food_service", false)
              .then(async ({ status, message, location }) => {
                await conn.query(foodServiceModel.SavePicture(location));
              })
              .catch(next);
          }
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

/**
* @api {put} /foodService/update/:id_service  Update 
* @apiVersion 0.0.1
* @apiGroup FoodService
* @apiName UpdateFoodService
* @apiUse token
*
* @apiDescription Update a foodService
*
* @apiParam {string} service_type  Service Type
* @apiParam {string} description  Description
* @apiParam {date} day  Day
* @apiParam {date} hour  Hour
* @apiParam {price} price   Price
* @apiParam {string} picture  Picture
* @apiParam {number} id_chef  Chef id
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
    const id_service = req.params.id;
    const food_service = req.body;
    console.log(id_service);
    try {
        await validatorFoodService(food_service);
        const conn = await pool.getConnection();
        const result = await conn.query(foodServiceModel.Update(id_service, food_service));
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
* @api {get} /foodService/detail/:id_service  Detail
* @apiVersion 0.0.1
* @apiGroup FoodService
* @apiName FoodServiceDetail
* @apiUse token
*
* @apiDescription Get detail of a food service
*
* @apiSuccessExample Success-Response:
* HTTP/1.1 200 OK
*
* {
* "status": true,
  "message": "Successful Operation",
  "data": [
     {
            "id_food_service": 7,
            "service_type": "service_example",
            "description": "ipsum dolor",
            "day": 6,
            "hour": "00:00:02",
            "price": 50,
            "picture": "service_picture",
            "created": "2020-11-27T12:45:05.000Z",
            "updated": "2020-11-27T12:45:05.000Z",
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
    const id_service = req.params.id;
    try {
        const conn = await pool.getConnection();
        const result = await conn.query(foodServiceModel.Detail(id_service));
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

async function getAll(req, res, next) {
    try {
        const conn = await pool.getConnection();
        const result = await conn.query(foodServiceModel.getAll());
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
* @api {get} /foodService/getAllService/:id_chef  GetAllServiceChef
* @apiVersion 0.0.1
* @apiGroup FoodService
* @apiName GetAllServiceChef
* @apiUse token
*
* @apiDescription Get all servce of a chef
*
* @apiSuccessExample Success-Response:
* HTTP/1.1 200 OK
*
* {
* "status": true,
  "message": "Successful Operation",
  "data": [
     {
            "id_food_service": 7,
            "service_type": "service_example",
            "description": "ipsum dolor",
            "day": 6,
            "hour": "00:00:02",
            "price": 50,
            "picture": "service_picture",
            "created": "2020-11-27T12:45:05.000Z",
            "updated": "2020-11-27T12:45:05.000Z",
            "chef_id_chef": 1
        },
        {
            "id_food_service": 8,
            "service_type": "service_example",
            "description": "lorem",
            "day": 3,
            "hour": "00:00:02",
            "price": 50,
            "picture": "service_picture",
            "created": "2020-11-27T12:45:06.000Z",
            "updated": "2020-11-27T12:45:06.000Z",
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
async function getAllService(req, res, next) {
    const id_chef = req.params.id;
    try {
        const conn = await pool.getConnection();
        const result = await conn.query(foodServiceModel.getAllServices(id_chef));
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
* @api {delete} /foodService/delete/:id_service  Delete 
* @apiVersion 0.0.1
* @apiGroup FoodService
* @apiName DeleteFoodService
* @apiUse token
*
* @apiDescription Delete a foodService
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
    const id_service = req.params.id;
    try {
        const conn = await pool.getConnection();
        const result = await conn.query(foodServiceModel.Delete(id_service));
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

async function validatorFoodService(serviceChef) {
    const schema = Joi.object({
        service_type: Joi.string().required(),
        description: Joi.string().required(),
        day: Joi.date().required(),
        hour: Joi.date().required(),
        price: Joi.number(),
     //   picture: Joi.string().required(),
        id_chef: Joi.number().required(),
    });

    await schema.validateAsync(serviceChef);
}