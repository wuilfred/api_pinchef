const pool = require('../../../helpers/db');
const Role = require('../../../helpers/role');
const profileModel = require('../models/profileModel');
const Joi = require('joi');


module.exports = {
    create,
    detail,
    update,
    delete: _delete
};

async function create(req, res, next) {

    const id_user = req.params.id;
    const user = req.body;
    const validator = await validatorProfile(user);

    if (!validator.isValid) {
        return res.status(400).json({
            status: false,
            message: validator.message,
        });
    }

    try {
        const conn = await pool.getConnection();
        const result = await conn.query(profileModel.Create(id_user, user));
        conn.release();

        res.status(200).json({
            status: true,
            message: 'Successful Operation',
            data: result
        });

    } catch (error) {
        console.log(error.message);
        return res.status(500).json({
            status: false,
            message: 'Operation failed',
            data: null
        });
    }

}

async function detail(req, res, next) {

    const id_user = req.params.id;

    try {
        const conn = await pool.getConnection();
        const result = await conn.query(profileModel.Detail(id_user));
        conn.release();

        res.status(200).json({
            status: true,
            message: 'Successful Operation',
            data: result
        });

    } catch (error) {
        return res.status(500).json({
            status: false,
            message: 'Operation failed',
            data: null
        });
    }

}

async function update(req, res, next) {

    const id_user = req.params.id;
    const user = req.body;
    const validator = await validatorProfile(user);

    if (!validator.isValid) {
        return res.status(400).json({
            status: false,
            message: validator.message,
        });
    }

    try {
        const conn = await pool.getConnection();
        const result = await conn.query(profileModel.Update(id_user, user));
        conn.release();

        res.status(200).json({
            status: true,
            message: 'Successful Operation',
            data: result
        });

    } catch (error) {
        console.log('Update', error);
        return res.status(500).json({
            status: false,
            message: 'Operation failed',
            data: null
        });
    }
}

async function _delete(req, res, next) {

    const id_user = req.params.id;

    try {
        const conn = await pool.getConnection();
        const result = await conn.query(profileModel.Delete(id_user));
        conn.release();

        res.status(200).json({
            status: true,
            message: 'Successful Operation',
            data: result
        });

    } catch (error) {
        return res.status(500).json({
            status: false,
            message: 'Operation failed',
            data: null
        });
    }
    
}

async function validatorProfile(user) {

    const schema = Joi.object({
        name: Joi.string()
            .required(),
        lastname: Joi.string()
            .required(),
        birthday: Joi.date()
            .required(),
        gender: Joi.string()
            .required(),
        phone: Joi.number()
            .required(),
        status: Joi.number(),
        photo: Joi.string()
            .required(),
        address: Joi.string()
            .required(),
        role: Joi.any()
            .valid(Role.Chef, Role.User)
            .required()
    });

    try {
        const value = await schema.validateAsync(user);
        return { isValid: true };
    }
    catch (err) {
        return { isValid: false, message: err.message };
    }
}