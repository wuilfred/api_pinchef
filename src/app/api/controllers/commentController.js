const pool = require("../../../helpers/db");
const commentModel = require('../models/commentModel');
const Joi = require("joi");

module.exports = {
    create,
    update,
    detail,
    getByPost,
    delete: _delete,
}

async function create(req, res, next) {
    const id_post = req.params.id;
    const comment = req.body;

    try {
        await validatorComment(comment);
        const conn = await pool.getConnection();
        const result = await conn.query(commentModel.Create(id_post, comment));
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
    const id_comment = req.params.id;
    const comment = req.body;

    try {
        await validatorComment(comment);
        const conn = await pool.getConnection();
        const result = await conn.query(commentModel.Update(id_comment, comment));
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
    const id_comment = req.params.id;
    try {
        const conn = await pool.getConnection();
        const result = await conn.query(commentModel.Detail(id_comment));
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

async function getByPost(req, res, next) {
    const id_post = req.params.id;
    try {
        const conn = await pool.getConnection();
        const result = await conn.query(commentModel.GetByPost(id_post));
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
    const id_comment = req.params.id;
    try {
        const conn = await pool.getConnection();
        const result = await conn.query(commentModel.Delete(id_comment));
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

async function validatorComment(comment) {
    const schema = Joi.object({
        comment: Joi.string().required(),
        id_user: Joi.number().required(),
        status: Joi.number()
    });

    await schema.validateAsync(comment);
}