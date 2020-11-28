'use strict'
const db = require('../../../helpers/db');
const cartModel = require('../../api/models/cartModel');
const Joi = require('joi');
const validateRequest = require('../../../middleware/validate-request');

function createSchema(req, res, next) {
    const schema = Joi.object({
        name: Joi.string().required(),
        description: Joi.string().required(),
        price: Joi.number().required(),
        quantity: Joi.number().required(),
        tax: Joi.number().required(),
        shipping: Joi.number().required(),
        total: Joi.number().required(),
        type_payment : Joi.string().required()
    });
    validateRequest(req, next, schema);
}

   /**
   * @api {post} /cart/create Create Cart Order
   * @apiVersion 0.0.1
   * @apiGroup Cart Order
   * @apiName Create Cart Order
   *
   * @apiDescription Create Cart Order
   * 
   * @apiUse token
   *
   * @apiParam {string} name  Name
   * @apiParam {string} description  Description
   * @apiParam {number} price  Price
   * @apiParam {number} quantity  Quantity
   * @apiParam {number} tax  TAX, IVA
   * @apiParam {number} shipping  Shipping cost
   * @apiParam {number} type_payment  Payment Type
   * @apiParam {number} total  Total value
   * 
   * @apiSuccessExample Success-Response:
   * HTTP/1.1 200 OK
   * {
   *     "status": true,
   *     "message": "Order added successfully"
   * }
   *
   * @apiErrorExample {json} Error-Response:
   *  HTTP/1.1 400 Bad Request
   * {
   * }
   */
function create(req, res, next) {
    service_create(req.body)
        .then(() => res.json({ status: true , message: 'Order added successfully' }))
        .catch(next);
}

async function service_create(params) {
    const conn = await db.getConnection();
    await conn.query(cartModel.Create(params));
    conn.release();
}

function detail(req, res, next) {
    const id_cart_order = req.params.id;
    console.log(id_cart_order);
    service_detail(id_cart_order)
        .then(({ status, message, ...data}) => {res.json({ status , message, data});})
        .catch(next);
}

async function service_detail(params) {
    const conn = await db.getConnection();
    const cart_order = await conn.query(cartModel.Detail(params));
    conn.release();
    if(cart_order.length === 0){
        return {
          status:false,
          message: "cart order don't exists"
        }
    }
    return {
        ...cart_order[0],
        status: true
    };
}

module.exports = {
    create,
    createSchema,
    detail
};