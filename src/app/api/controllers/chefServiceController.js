const chefServiceModel = require('../models/chefServiceModel');
const pool = require("../../../helpers/db");
const Joi = require("joi");
const validateRequest = require('../../../middleware/validate-request');

module.exports = {
    enableOrDisableService,
    createSchema,
    update,
    create,
    getAllService,
    detail
};

function createSchema(req, res, next) {
    const schema = Joi.object({
        name: Joi.string().required(),
        description: Joi.string().required(),
    });
    validateRequest(req, next, schema);
}

/**
* @api {post} /chefService/enableOrDisableService/:id_service  Enable or Disable 
* @apiVersion 0.0.1
* @apiGroup ChefService
* @apiName EnableOrDisableService
* @apiUse token
*
* @apiDescription Enablo or disable a service chef
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
async function enableOrDisableService(req, res, next) {
    const id_service = req.params.id;
    let result;
    try {
        const serviceExist = await checkService(id_service);
        console.log(serviceExist[0]);
        if (serviceExist[0] !== undefined) {
            const status = serviceExist[0].status === 0 ? 1 : 0;
            const conn = await pool.getConnection();
            result = await conn.query(chefServiceModel.changeStatusService(id_service, status));
            conn.release();

            res.status(200).json({
                status: true,
                message: "Successful Operation",
                data: result,
            });
        } else {
            res.status(400).json({
                status: true,
                message: "Successful Operation",
                data: "Service not exist!",
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
* @api {post} /chefService/create/  Create Service
* @apiVersion 0.0.1
* @apiGroup ChefService
* @apiName CreateService
* @apiUse token
*
* @apiDescription Create service 
*
* @apiParam {string} name Name
* @apiParam {string} description Description
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
        "insertId": 5,
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
    const service = req.body;
    try {
        const conn = await pool.getConnection();
        const result = await conn.query(chefServiceModel.CreateService(service));
        conn.release();

        if (result.affectedRows > 0) {
            const response = await conn.query(chefServiceModel.CreateServiceAvailability(result.insertId));
            conn.release();

            res.status(200).json({
                status: true,
                message: "Successful Operation",
                data: response,
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
* @api {put} /chefService/update/:id_service  Update Service
* @apiVersion 0.0.1
* @apiGroup ChefService
* @apiName UpdateService
* @apiUse token
*
* @apiDescription Update a chefService 
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
    const service = req.body;

    try {
        const conn = await pool.getConnection();
        const result = conn.query(chefServiceModel.Update(id_service, service));
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
* @api {get} /chefService/detail/:id_service  Detail Service
* @apiVersion 0.0.1
* @apiGroup ChefService
* @apiName DetailService
* @apiUse token
*
* @apiDescription Get detail of a chefService
*
* @apiSuccessExample Success-Response:
* HTTP/1.1 200 OK
*
* {
* "status": true,
  "message": "Successful Operation",
  "data": [
     {
            "id": 2,
            "service_name": "Lorem",
            "description": "Lorem ipsum dolors",
            "created": "2020-11-28T21:06:15.000Z",
            "updated": "2020-11-28T21:40:55.000Z",
            "status": 1,
            "status_update": "2020-11-28T21:06:15.000Z"
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
        const result = await conn.query(chefServiceModel.Detail(id_service));
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
* @api {get} /chefService/getAllService/  Get all Service
* @apiVersion 0.0.1
* @apiGroup ChefService
* @apiName GetAllService
* @apiUse token
*
* @apiDescription Get all chefService
*
* @apiSuccessExample Success-Response:
* HTTP/1.1 200 OK
*
* {
* "status": true,
  "message": "Successful Operation",
  "data": [
        {
            "id": 1,
            "service_name": "a1",
            "description": "a1...",
            "created": "2020-11-28T21:04:16.000Z",
            "updated": "2020-11-28T21:04:16.000Z",
            "status": 1,
            "status_update": "2020-11-28T21:06:15.000Z"
        },
        {
            "id": 3,
            "service_name": "a2",
            "description": "a2..",
            "created": "2020-11-28T21:07:31.000Z",
            "updated": "2020-11-28T21:07:31.000Z",
            "status": 1,
            "status_update": "2020-11-28T21:47:58.000Z"
        }
    ]s
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
    try {
        const conn = await pool.getConnection();
        const result = await conn.query(chefServiceModel.getAllServices());
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

async function checkService(id_service) {
    const conn = await pool.getConnection();
    const result = conn.query(chefServiceModel.CheckService(id_service));
    conn.release();
    return result;
}