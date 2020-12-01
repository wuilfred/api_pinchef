const masterClassModel = require('../models/masterClassModel');
const pool = require("../../../helpers/db");
const Joi = require("joi");

module.exports = {
    create,
    update,
    detail,
    delete: _delete,
    getAllForChef,
    getAll
};

async function create(req, res, next) {
    const id_chef = req.params.id;
    const masterClass = req.body;
    try {
        await validatorMasterClass({ ...masterClass, id_chef });
        const conn = await pool.getConnection();
        const result = await conn.query(masterClassModel.Create(id_chef, masterClass));
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
    const id_masterClass = req.params.id;
    const masterClass = req.body;
    try {
        await validatorMasterClass(masterClass);
        const conn = await pool.getConnection();
        const result = await conn.query(masterClassModel.Update(id_masterClass, masterClass));
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
    const id_masterClass = req.params.id;
    try {
        const conn = await pool.getConnection();
        const result = await conn.query(masterClassModel.Detail(id_masterClass));
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

async function getAll(req, res, next) {
    try {
        const conn = await pool.getConnection();
        const result = await conn.query(masterClassModel.GetAll());
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

async function getAllForChef(req, res, next) {
    const id_chef = req.params.id;
    try {
        const conn = await pool.getConnection();
        const result = await conn.query(masterClassModel.GetAllForChef(id_chef));
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

async function checkReviewExist(id_chef) {
    try {
        const conn = await pool.getConnection();
        const result = await conn.query(masterClassModel.CheckReviewExist(id_chef));
        conn.release();

        return result;
    } catch (error) {
        throw new Error(error);
    }
}

async function _delete(req, res, next) {
    const id_masterClass = req.params.id;
    try {
        const conn = await pool.getConnection();
        const result = await conn.query(masterClassModel.Delete(id_masterClass));
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

async function validatorMasterClass(review) {
    const schema = Joi.object({
        title: Joi.string().required(),
        cousine: Joi.string().required(),
        dietary: Joi.string().required(),
        description: Joi.string().required(),
        ingredient_list: Joi.string().required(),
        start_date: Joi.date().required(),
        class_duration: Joi.date().required(),
        ticket_count: Joi.number().required(),
        ticket_price: Joi.number().required(),
        notified: Joi.number().required(),
        id_chef: Joi.number().required()
    });

    await schema.validateAsync(review);
}