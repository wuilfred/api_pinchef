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