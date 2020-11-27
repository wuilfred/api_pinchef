const foodItemModel = require('../models/foodItemModel');
const pool = require("../../../helpers/db");
const Joi = require("joi");

module.exports = {
    create,
    update,
    detail,
    getItemsByChef,
    delete: _delete,
};

async function create(req, res, next) {
    const id_chef = req.params.id;
    const foodItem = req.body;
    try {
        await validatorFoodItem({...foodItem, id_chef});
        const conn = await pool.getConnection();
        const result = await conn.query(foodItemModel.Create(id_chef, foodItem));
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
    const id_item = req.params.id;
    const foodItem = req.body;
    try {
        await validatorFoodItem(foodItem);
        const conn = await pool.getConnection();
        const result = await conn.query(foodItemModel.Update(id_item, foodItem));
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
    const id_item = req.params.id;
    try {
        const conn = await pool.getConnection();
        const result = await conn.query(foodItemModel.Detail(id_item));
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

async function getItemsByChef(req, res, next) {
    const id_chef = req.params.id;
    try {
        const conn = await pool.getConnection();
        const result = await conn.query(foodItemModel.getItemsByChef(id_chef));
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
    const id_item = req.params.id;
    try {
        const conn = await pool.getConnection();
        const result = await conn.query(foodItemModel.Delete(id_item));
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

async function validatorFoodItem(foodItem) {
    const schema = Joi.object({
        name: Joi.string().required(),
        description: Joi.string().required(),
        day: Joi.date().required(),
        hour: Joi.date().required(),
        price: Joi.number(),
        picture: Joi.string().required(),
        id_chef: Joi.number().required(),
    });

    await schema.validateAsync(foodItem);
}