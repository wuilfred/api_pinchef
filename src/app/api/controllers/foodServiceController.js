const foodServiceModel = require('../models/foodServiceModel');
const pool = require("../../../helpers/db");
const Joi = require("joi");

module.exports = {
    create,
    update,
    detail,
    getAllService,
    delete: _delete,
};

async function create(req, res, next) {
    const id_chef = req.params.id;
    const food_service = req.body;
    try {
        await validatorFoodService({...food_service, id_chef});
        const conn = await pool.getConnection();
        const result = await conn.query(foodServiceModel.Create(id_chef, food_service));
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
        picture: Joi.string().required(),
        id_chef: Joi.number().required(),
    });

    await schema.validateAsync(serviceChef);
}