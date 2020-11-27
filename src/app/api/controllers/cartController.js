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

function create(req, res, next) {
    service_create(req.body)
        .then(() => res.json({ message: 'Order added successfully' }))
        .catch(next);
}

async function service_create(params) {
    const conn = await db.getConnection();
    await conn.query(cartModel.Create(params));
    conn.release();
}

module.exports = {
    create,
    createSchema
};