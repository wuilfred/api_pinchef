const postModel = require('../models/postModel');
const pool = require("../../../helpers/db");
const Joi = require("joi");

module.exports = {
    create,
    update,
    detail,
    getByProfile,
    delete: _delete
};

async function create(req, res, next) {
    const id_user = req.params.id;
    const post = req.body;
    try {
        await validatorPost(post);
        const conn = await pool.getConnection();
        const result = await conn.query(postModel.Create(id_user, post));
        conn.release();

        res.status(200).json({
            status: true,
            message: "Successful Operation",
            data: result,
        });

    } catch (error) {
        return res.status(500).json({
            status: false,
            message: "Operation failed",
            details: error.message,
        });
    }
}

async function update(req, res, next) {
    const id_post = req.params.id;
    const post = req.body;
    try {
        await validatorPost(post);
        const conn = await pool.getConnection();
        const result = await conn.query(postModel.Update(id_post, post));
        conn.release();

        res.status(200).json({
            status: true,
            message: "Successful Operation",
            data: result,
        });

    } catch (error) {
        return res.status(500).json({
            status: false,
            message: "Operation failed",
            details: error.message,
        });
    }
}

async function detail(req, res, next) {

}

async function getByProfile(req, res, next) {

}

async function _delete(req, res, next) {
    const id_post = req.params.id;
    try {
        const conn = await pool.getConnection();
        const result = await conn.query(postModel.Delete(id_post));
        conn.release();

        res.status(200).json({
            status: true,
            message: "Successful Operation",
            data: result,
        });
        
    } catch (error) {
        return res.status(500).json({
            status: false,
            message: "Operation failed",
            details: error.message,
        });
    }
}

async function validatorPost(post) {
    const schema = Joi.object({
        name: Joi.string().required(),
        description: Joi.string().required(),
        photo: Joi.string().required(),
        location: Joi.string().required(),
        status: Joi.number(),
        privacy: Joi.string().required(),
        time_zone: Joi.string().required(),
        id_profile: Joi.required()
    });

    try {
        const value = await schema.validateAsync(post);

    } catch (err) {
        throw new Error(err);
    }
}