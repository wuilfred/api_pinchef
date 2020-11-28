'use strict'
const db = require('../../../helpers/db');
const cousineModel = require('../models/cousineModel');
const Joi = require('joi');
const validateRequest = require('../../../middleware/validate-request');

function createSchema(req, res, next) {
    const schema = Joi.object({
        cousine: Joi.string().required(),
        description: Joi.string().required(),
    });
    validateRequest(req, next, schema);
}

   /**
   * @api {post} /cousine/create Create cousine 
   * @apiVersion 0.0.1
   * @apiGroup Cousine 
   * @apiName Create cousine 
   *
   * @apiDescription Create cousine 
   * 
   * @apiUse token
   *
   * @apiParam {string} cousine  Cousine Name
   * @apiParam {string} description  Description
   * 
   * @apiSuccessExample Success-Response:
   * HTTP/1.1 200 OK
   * {
   *     "status": true,
   *     "message": "Cousine added successfully"
   * }
   *
   * @apiErrorExample {json} Error-Response:
   *  HTTP/1.1 400 Bad Request
   * {
   * }
   */
function create(req, res, next) {
    service_create(req.body)
        .then(() => res.json({ status: true , message: 'Cousine added successfully' }))
        .catch(next);
}

async function service_create(params) {
    const conn = await db.getConnection();
    await conn.query(cousineModel.Create(params));
    conn.release();
}

/**
   * @api {get} /cousine/detail/:id Cousine Detail
   * @apiVersion 0.0.1
   * @apiGroup Cousine 
   * @apiName Cousine Detail
   *
   * @apiDescription Cousine Detail
   * 
   * @apiUse token
   *
   * 
   * @apiSuccessExample Success-Response:
   * HTTP/1.1 200 OK
   *{
   * "status": true,
   * "data": {
   *     "id_cousine": 2,
   *     "cousine": "Filette mignon",
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
   * "message": "cousine order don't exists",
   * "data": {}
   * }
   */
function detail(req, res, next) {
    const id_cousine = req.params.id;
    console.log(id_cousine);
    service_detail(id_cousine)
        .then(({ status, message, ...data}) => {res.json({ status , message, data});})
        .catch(next);
}

async function service_detail(params) {
    const conn = await db.getConnection();
    const cousine = await conn.query(cousineModel.Detail(params));
    conn.release();
    if(cousine.length === 0){
        return {
          status:false,
          message: "cousine don't exists"
        }
    }
    return {
        ...cousine[0],
        status: true
    };
}


function updateSchema(req, res, next) {
    const schema = Joi.object({
        cousine: Joi.string().required(),
        description: Joi.string().required(),
    });
    validateRequest(req, next, schema);
}

/**
   * @api {get} /cousine/update/:id Update Cousine
   * @apiVersion 0.0.1
   * @apiGroup Cousine 
   * @apiName Update Cousine
   *
   * @apiDescription Update Cousine
   * 
   * @apiUse token
   *
   * 
   * @apiSuccessExample Success-Response:
   * HTTP/1.1 200 OK
   *{
   * "status": true,
   * "message": "Cousine updated succefully",
   * "data": {
   *     "id_cousine": 2,
   *     "cousine": "Filette mignon",
   *     "description": "Wonderful food",
   *     "created": "2020-11-28T20:49:12.000Z",
   *     "updated": "2020-11-28T21:35:49.000Z"
   *  }
   *}
   *
   * @apiErrorExample {json} Error-Response:
   *  HTTP/1.1 400 Bad request
   * {
   *   "message": "Validation error: \"cousine\" must be a string"
   * }
   */
function update(req, res, next) {
    const id_cousine = req.params.id;
    const cousine = req.body;
    service_update(id_cousine, cousine)
        .then(({ status, message, ...data}) => {res.json({ status , message, data});})
        .catch(next);
}

async function service_update(id, cousine) {
    const conn = await db.getConnection();
    const newCousine = await conn.query(cousineModel.Update(id, cousine));
    if(newCousine[0].affectedRows === 0){
        return {
          status:false,
          message: "Error updating data"
        }
    }
    if(newCousine[0].affectedRows === 1){
        return {
            ...newCousine[1][0],
            status:true,
            message: "Cousine updated succefully",            
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
   * @api {get} /cousine/delete/:id Delete Cousine
   * @apiVersion 0.0.1
   * @apiGroup Cousine 
   * @apiName Delete Cousine
   *
   * @apiDescription Delete Cousine
   * 
   * @apiUse token
   *
   * 
   * @apiSuccessExample Success-Response:
   * HTTP/1.1 200 OK
   *{
   * "status": true,
   *  "message": "Cousine deleted successfully"
   *}
   *
   * @apiErrorExample {json} Error-Response:
   *  HTTP/1.1 400 Bad request
   * {
   *   "Validation error: \"id\" is required"
   * }
   */
function _delete(req, res, next) {
    const id_cousine = req.params.id;
    service_delete(id_cousine)
        .then(() => res.json({ status: true , message: 'Cousine deleted successfully' }))
        .catch(next);
}

async function service_delete(params) {
    const conn = await db.getConnection();
    await conn.query(cousineModel.Delete(params));
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