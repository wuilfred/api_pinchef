'use strict'
const db = require('../../../helpers/db');
const foodSTModel = require('../models/foodSTModel');
const Joi = require('joi');
const validateRequest = require('../../../middleware/validate-request');

function createSchema(req, res, next) {
    const schema = Joi.object({
        service_type: Joi.string().required(),
        description: Joi.string().required(),
    });
    validateRequest(req, next, schema);
}

   /**
   * @api {post} /foodst/create Create food service type
   * @apiVersion 0.0.1
   * @apiGroup Food Service Type 
   * @apiName Create foodST 
   *
   * @apiDescription Create Food Service Type
   * 
   * @apiUse token
   *
   * @apiParam {string} service_type  Food service type
   * @apiParam {string} description  Description
   * 
   * @apiSuccessExample Success-Response:
   * HTTP/1.1 200 OK
   * {
   *     "status": true,
   *     "message": "Food service type added successfully"
   * }
   *
   * @apiErrorExample {json} Error-Response:
   *  HTTP/1.1 400 Bad Request
   * {
   * }
   */
function create(req, res, next) {
    service_create(req.body)
        .then(() => res.json({ status: true , message: 'Food service type added successfully' }))
        .catch(next);
}

async function service_create(params) {
    const conn = await db.getConnection();
    await conn.query(foodSTModel.Create(params));
    conn.release();
}

/**
   * @api {get} /foodst/detail/:id Food service type Detail
   * @apiVersion 0.0.1
   * @apiGroup Food Service Type 
   * @apiName Food service type Detail
   *
   * @apiDescription Food service type Detail
   * 
   * @apiUse token
   *
   * 
   * @apiSuccessExample Success-Response:
   * HTTP/1.1 200 OK
   *{
   * "status": true,
   * "data": {
   *     "id_food_st": 2,
   *     "service_type": "Fast food",
   *     "description": "Fast food",
   *     "created": "2020-11-28T20:49:12.000Z",
   *     "updated": "2020-11-28T20:49:12.000Z"
   *    }
   *}
   *
   * @apiErrorExample {json} Error-Response:
   *  HTTP/1.1 200 OK
   * {
   * "status": false,
   * "message": "Food service type don't exists",
   * "data": {}
   * }
   */
function detail(req, res, next) {
    const id_food_st = req.params.id;
    service_detail(id_food_st)
        .then(({ status, message, ...data}) => {res.json({ status , message, data});})
        .catch(next);
}

async function service_detail(params) {
    const conn = await db.getConnection();
    const food_st = await conn.query(foodSTModel.Detail(params));
    conn.release();
    if(food_st.length === 0){
        return {
          status:false,
          message: "Food service type don't exists"
        }
    }
    return {
        ...food_st[0],
        status: true
    };
}


function updateSchema(req, res, next) {
    const schema = Joi.object({
        service_type: Joi.string().required(),
        description: Joi.string().required(),
    });
    validateRequest(req, next, schema);
}

/**
   * @api {get} /foodst/update/:id Update Food Service
   * @apiVersion 0.0.1
   * @apiGroup Food Service Type 
   * @apiName Update Food Service
   *
   * @apiDescription Update Food Service
   * 
   * @apiUse token
   *
   * 
   * @apiSuccessExample Success-Response:
   * HTTP/1.1 200 OK
   *{
   * "status": true,
   * "message": "Food Service type updated succefully",
   * "data": {
   *     "id_food_st": 2,
   *     "service_type": "Fast food",
   *     "description": "Fast food",
   *     "created": "2020-11-28T20:49:12.000Z",
   *     "updated": "2020-11-28T21:35:49.000Z"
   *  }
   *}
   *
   * @apiErrorExample {json} Error-Response:
   *  HTTP/1.1 400 Bad request
   * {
   *   "message": "Validation error: \"service_type\" must be a string"
   * }
   */
function update(req, res, next) {
    const id_food_st = req.params.id;
    const cousine = req.body;
    service_update(id_food_st, cousine)
        .then(({ status, message, ...data}) => {res.json({ status , message, data});})
        .catch(next);
}

async function service_update(id, food_st) {
    const conn = await db.getConnection();
    const newFoodSt = await conn.query(foodSTModel.Update(id, food_st));
    if(newFoodSt[0].affectedRows === 0){
        return {
          status:false,
          message: "Error updating data"
        }
    }
    if(newFoodSt[0].affectedRows === 1){
        return {
            ...newFoodSt[1][0],
            status:true,
            message: "Food Service type updated succefully",            
          }
    }

    conn.release();
}

function deleteSchema(req, res, next) {
    const schema = Joi.object({
        id: Joi.number().required(),
    });
    validateRequestGet(req, next, schema);
}
/**
   * @api {get} /foodst/delete/:id Delete Food Service Type 
   * @apiVersion 0.0.1
   * @apiGroup Food Service Type 
   * @apiName Delete Food Service
   *
   * @apiDescription Delete Food Service Type 
   * 
   * @apiUse token
   *
   * 
   * @apiSuccessExample Success-Response:
   * HTTP/1.1 200 OK
   *{
   * "status": true,
   *  "message": "Food Service Type deleted successfully"
   *}
   *
   * @apiErrorExample {json} Error-Response:
   *  HTTP/1.1 400 Bad request
   * {
   *   "Validation error: \"id\" is required"
   * }
   */
function _delete(req, res, next) {
    const id_food_st = req.params.id;
    console.log(id_food_st);
    service_delete(id_food_st)
        .then(() => res.json({ status: true , message: 'Food Service Type deleted successfully' }))
        .catch(next);
}

async function service_delete(params) {
    const conn = await db.getConnection();
    await conn.query(foodSTModel.Delete(params));
    conn.release();
}

/**
   * @api {get} /foodst Get all
   * @apiVersion 0.0.1
   * @apiGroup Food Service Type 
   * @apiName Get All 
   *
   * @apiDescription Get all Food Service Type 
   * 
   * @apiUse token
   *
   * 
   * @apiSuccessExample Success-Response:
   * HTTP/1.1 200 OK
   *{
     "status": true,
     "message": "Successful operation",
     "data": [
        {
            "id_food_st": 3,
            "service_type": "Back yard camp",
            "description": "sunday grill",
            "created": "2020-11-29T06:29:40.000Z",
            "updated": "2020-11-29T06:36:36.000Z"
        },
        {
            "id_food_st": 4,
            "service_type": "Home cook",
            "description": "Cook at home",
            "created": "2020-11-29T06:37:48.000Z",
            "updated": "2020-11-29T06:37:48.000Z"
        }
      ]
    }
   *
   */
function getAll(req, res, next) {
    db.getConnection()
        .then(conn => {
            conn.query(foodSTModel.GetAll())
                .then((rows) => {
                    res.status(200).send({
                        status: true,
                        message: rows.length > 0 ? 'Successful operation': 'No records found',
                        data: rows
                    });
                    conn.end();
                })
                .catch(err => {
                    res.status(500).send({
                        status: false,
                        message: err
                    });
                })

        }).catch(err => {
        res.status(500).send({
            status: false,
            message: err.code
        });
        //not connected
    });
}

module.exports = {
    create,
    createSchema,
    detail,
    deleteSchema,
    delete: _delete,
    updateSchema,
    update,
    getAll
};