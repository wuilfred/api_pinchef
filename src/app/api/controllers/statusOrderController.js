'use strict'
const db = require('../../../helpers/db');
const statusOrderModel = require('../../api/models/statusOrderModel');
const Joi = require('joi');
const validateRequest = require('../../../middleware/validate-request');

function createSchema(req, res, next) {
    const schema = Joi.object({
        name: Joi.string().required(),
        description: Joi.string().required(),
        type_payment: Joi.string().required(),
        status: Joi.string().required(),
        comment: Joi.string().required(),
    });
    validateRequest(req, next, schema);
}

function updateSchema(req, res, next) {
    const schema = Joi.object({
        name: Joi.string().required(),
        description: Joi.string().required(),
        type_payment: Joi.string().required(),
        status: Joi.string().required(),
        comment: Joi.string().required(),
        id_cart_order: Joi.number().required()
    });
    validateRequest(req, next, schema);
}

/**
* @api {post} /statusOrder/create/:id_cart_order Create Status Order
* @apiVersion 0.0.1
* @apiGroup Status Order
* @apiName Create statusOrder Order
*
* @apiDescription Create Status Order
* 
* @apiUse token
*
* @apiParam {string} name  Name
* @apiParam {string} description  Description
* @apiParam {string} type_payment  Type payment
* @apiParam {sting} status  Status
* @apiParam {string} comment Comment
* 
* @apiSuccessExample Success-Response:
* HTTP/1.1 200 OK
* {
*     "status": true,
*     "message": "Status Order crated successfully"
* }
*
* @apiErrorExample {json} Error-Response:
*  HTTP/1.1 400 Bad Request
* {
* }
*/
function create(req, res, next) {
    service_create(req.params.id, req.body)
        .then(() => res.json({ status: true, message: 'Status Order crated successfully' }))
        .catch(next);
}

async function service_create(id_cart_order, params) {
    const conn = await db.getConnection();
    await conn.query(statusOrderModel.Create(id_cart_order, params));
    conn.release();
}

/**
   * @api {get} /statusOrder/detail/:id Status Order Detail
   * @apiVersion 0.0.1
   * @apiGroup Status Order
   * @apiName Status Order Detail
   *
   * @apiDescription Status Order Detail
   * 
   * @apiUse token
   *
   * 
   * @apiSuccessExample Success-Response:
   * HTTP/1.1 200 OK
   * {
    "status": true,
    "data": {
        "id_status_order": 6,
        "name": "status_update",
        "description": "ss",
        "type_payment": "cash",
        "comment": "Pending",
        "created": "2020-12-08T04:49:51.000Z",
        "updated": "2020-12-08T04:53:29.000Z",
        "cart_order_id_cart_order": 1
    }
}
   *
   * @apiErrorExample {json} Error-Response:
   *  HTTP/1.1 200 OK
   * {
   * "status": false,
   * "message": "status order don't exists",
   * "data": {}
   * }
   */
function detail(req, res, next) {
    const id_status_order = req.params.id;
    console.log(id_status_order);
    service_detail(id_status_order)
        .then(({ status, message, ...data }) => { res.json({ status, message, data }); })
        .catch(next);
}

async function service_detail(params) {
    const conn = await db.getConnection();
    const status_order = await conn.query(statusOrderModel.Detail(params));
    conn.release();
    if (status_order.length === 0) {
        return {
            status: false,
            message: "status order don't exists"
        }
    }
    return {
        ...status_order[0],
        status: true
    };
}

/**
   * @api {get} /statusOrder/update/:id_status_order Update Status Order
   * @apiVersion 0.0.1
   * @apiGroup Status Order 
   * @apiName Update Status Order
   *
   * @apiDescription Update Status Order
   * 
   * @apiUse token
   *
   * 
   * @apiSuccessExample Success-Response:
   * HTTP/1.1 200 OK
   {
    "status": true,
    "message": "Status Order updated succefully",
    "data": {
        "data": {
            "affectedRows": 1,
            "insertId": 0,
            "warningStatus": 0
        }
    }
}
   *
   * @apiErrorExample {json} Error-Response:
   *  HTTP/1.1 400 Bad request
   * {
   *   "message": "Validation error: \"dietary\" must be a string"
   * }
   */
function update(req, res, next) {
    const id_status_order = req.params.id;
    const status_order = req.body;
    service_update(id_status_order, status_order)
        .then(({ status, message, ...data }) => { res.json({ status, message, data }); })
        .catch(next);
}

async function service_update(id, status_order) {
    const conn = await db.getConnection();
    const newStatusOrder = await conn.query(statusOrderModel.Update(id, status_order));
    console.log(newStatusOrder);
    if (newStatusOrder.affectedRows === 0) {
        return {
            status: false,
            message: "Error updating data"
        }
    }
    if (newStatusOrder.affectedRows === 1) {
        return {
            ...newStatusOrder,
            status: true,
            message: "Status Order updated succefully",
        }
    }

    conn.release();
}

function deleteSchema(req, res, next) {
    const schema = Joi.object({
        id: Joi.number().required(),
    });
    validateRequest(req.params, next, schema);
}
/**
   * @api {get} /statusOrder/delete/:id_status_order Delete Status Order
   * @apiVersion 0.0.1
   * @apiGroup Status Order 
   * @apiName Delete Status Order
   *
   * @apiDescription Delete Status Order
   * 
   * @apiUse token
   *
   * 
   * @apiSuccessExample Success-Response:
   * HTTP/1.1 200 OK
   *{
   * "status": true,
   *  "message": "Status Order deleted successfully"
   *}
   *
   * @apiErrorExample {json} Error-Response:
   *  HTTP/1.1 400 Bad request
   * {
   *   "Validation error: \"id\" is required"
   * }
   */
function _delete(req, res, next) {
    const id_status_order = req.params.id;
    service_delete(id_status_order)
        .then(() => res.json({ status: true, message: 'Status Order deleted successfully' }))
        .catch(next);
}

async function service_delete(params) {
    const conn = await db.getConnection();
    await conn.query(statusOrderModel.Delete(params));
    conn.release();
}

module.exports = {
    create,
    createSchema,
    detail,
    delete: _delete,
    update,
    deleteSchema,
    updateSchema
};