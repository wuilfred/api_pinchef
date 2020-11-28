'use strict'
const db = require('../../../helpers/db');
const dietaryModel = require('../models/dietaryModel');
const Joi = require('joi');
const validateRequest = require('../../../middleware/validate-request');

function createSchema(req, res, next) {
    const schema = Joi.object({
        dietary: Joi.string().required(),
        description: Joi.string().required(),
    });
    validateRequest(req, next, schema);
}

   /**
   * @api {post} /dietary/create Create dietary 
   * @apiVersion 0.0.1
   * @apiGroup Dietary 
   * @apiName Create dietary 
   *
   * @apiDescription Create dietary 
   * 
   * @apiUse token
   *
   * @apiParam {string} dietary  Dietary Name
   * @apiParam {string} description  Description
   * 
   * @apiSuccessExample Success-Response:
   * HTTP/1.1 200 OK
   * {
   *     "status": true,
   *     "message": "Dietary added successfully"
   * }
   *
   * @apiErrorExample {json} Error-Response:
   *  HTTP/1.1 400 Bad Request
   * {
   * }
   */
function create(req, res, next) {
    service_create(req.body)
        .then(() => res.json({ status: true , message: 'Dietary added successfully' }))
        .catch(next);
}

async function service_create(params) {
    const conn = await db.getConnection();
    await conn.query(dietaryModel.Create(params));
    conn.release();
}

/**
   * @api {get} /dietary/detail/:id dietary Detail
   * @apiVersion 0.0.1
   * @apiGroup dietary 
   * @apiName dietary Detail
   *
   * @apiDescription dietary Detail
   * 
   * @apiUse token
   *
   * 
   * @apiSuccessExample Success-Response:
   * HTTP/1.1 200 OK
   *{
   * "status": true,
   * "data": {
   *     "id_dietary": 2,
   *     "dietary": "Filette mignon",
   *     "description": "Wonderful food",
   *     "created": "2020-11-28T20:49:12.000Z",
   *     "updated": "2020-11-28T20:49:12.000Z"
   *    }
   *}
   *
   * @apiErrorExample {json} Error-Response:
   *  HTTP/1.1 200 OK
   * {
   * "status": false,
   * "message": "Dietary order don't exists",
   * "data": {}
   * }
   */
function detail(req, res, next) {
    const id_dietary = req.params.id;
    console.log(id_dietary);
    service_detail(id_dietary)
        .then(({ status, message, ...data}) => {res.json({ status , message, data});})
        .catch(next);
}

async function service_detail(params) {
    const conn = await db.getConnection();
    const dietary = await conn.query(dietaryModel.Detail(params));
    conn.release();
    if(dietary.length === 0){
        return {
          status:false,
          message: "dietary don't exists"
        }
    }
    return {
        ...dietary[0],
        status: true
    };
}


function updateSchema(req, res, next) {
    const schema = Joi.object({
        dietary: Joi.string().required(),
        description: Joi.string().required(),
    });
    validateRequest(req, next, schema);
}

/**
   * @api {get} /dietary/update/:id Update dietary
   * @apiVersion 0.0.1
   * @apiGroup dietary 
   * @apiName Update dietary
   *
   * @apiDescription Update dietary
   * 
   * @apiUse token
   *
   * 
   * @apiSuccessExample Success-Response:
   * HTTP/1.1 200 OK
   *{
   * "status": true,
   * "message": "dietary updated succefully",
   * "data": {
   *     "id_dietary": 2,
   *     "dietary": "Filette mignon",
   *     "description": "Wonderful food",
   *     "created": "2020-11-28T20:49:12.000Z",
   *     "updated": "2020-11-28T21:35:49.000Z"
   *  }
   *}
   *
   * @apiErrorExample {json} Error-Response:
   *  HTTP/1.1 400 Bad request
   * {
   *   "message": "Validation error: \"dietary\" must be a string"
   * }
   */
function update(req, res, next) {
    const id_dietary = req.params.id;
    const dietary = req.body;
    service_update(id_dietary, dietary)
        .then(({ status, message, ...data}) => {res.json({ status , message, data});})
        .catch(next);
}

async function service_update(id, dietary) {
    const conn = await db.getConnection();
    const newDietary = await conn.query(dietaryModel.Update(id, dietary));
    if(newDietary[0].affectedRows === 0){
        return {
          status:false,
          message: "Error updating data"
        }
    }
    if(newDietary[0].affectedRows === 1){
        return {
            ...newDietary[1][0],
            status:true,
            message: "Dietary updated succefully",            
          }
    }

    conn.release();
}

function deleteSchema(req, res, next) {
    const schema = Joi.object({
        id: Joi.number().required(),
    });
    validateRequest(req, next, schema);
}
/**
   * @api {get} /dietary/delete/:id Delete dietary
   * @apiVersion 0.0.1
   * @apiGroup dietary 
   * @apiName Delete dietary
   *
   * @apiDescription Delete dietary
   * 
   * @apiUse token
   *
   * 
   * @apiSuccessExample Success-Response:
   * HTTP/1.1 200 OK
   *{
   * "status": true,
   *  "message": "dietary deleted successfully"
   *}
   *
   * @apiErrorExample {json} Error-Response:
   *  HTTP/1.1 400 Bad request
   * {
   *   "Validation error: \"id\" is required"
   * }
   */
function _delete(req, res, next) {
    const id_dietary = req.params.id;
    service_delete(id_dietary)
        .then(() => res.json({ status: true , message: 'Dietary deleted successfully' }))
        .catch(next);
}

async function service_delete(params) {
    const conn = await db.getConnection();
    await conn.query(dietaryModel.Delete(params));
    conn.release();
}

module.exports = {
    create,
    createSchema,
    detail,
    deleteSchema,
    delete: _delete,
    updateSchema,
    update
};