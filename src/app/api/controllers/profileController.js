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
    const { profile, address, chef } = req.body;
    try {
        // Step 1 - Save profile
        await validatorProfile(profile);
        const conn = await pool.getConnection();
        const result = await conn.query(profileModel.Create(id_user, profile));
        conn.release();

        if (result.affectedRows > 0) {
            const id_profile = result.insertId;
            // If it's chef save him
            if (profile.role === Role.Chef) {
                const create_Chef = await createChef(chef, id_profile)
            }
            // Step 3 - Save address
            const create_address = await createAddress(id_user, id_profile, address, profile.address);
        }

        res.status(200).json({
            status: true,
            message: 'Successful Operation',
            data: result
        });

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            status: false,
            message: 'Operation failed',
            details: error.message
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
            details: error.message
        });
    }
}

async function update(req, res, next) {
    const id_user = req.params.id;
    const user = req.body;
    try {
        await validatorProfile(user);
        const conn = await pool.getConnection();
        const result = await conn.query(profileModel.Update(id_user, user));
        const id_profile = result.insertId;
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
            details: error.message
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
            details: error.message
        });
    }
}

async function createAddress(user_id_user, profile_id_profile, address, first_address) {
    const schema = Joi.object({
        first_address: Joi.string().required(),
        second_address: Joi.string().required(),
        country: Joi.string().required(),
        state_region: Joi.string().required(),
        city: Joi.string().required(),
        postcode: Joi.number().required(),
        lat_lon: Joi.string().required(),
        about_info: Joi.string().required(),
        profile_id_profile: Joi.required(),
        user_id_user: Joi.required()
    });

    const addressData = {
        ...address,
        first_address,
        profile_id_profile,
        user_id_user
    };

    try {
        const value = await schema.validateAsync(addressData);

    } catch (err) {
        throw new Error(err);
    }

    const conn = await pool.getConnection();
    const result = await conn.query(profileModel.CreateAddress(addressData));
    conn.release();
}

async function createChef(chef, profile_id_profile) {
    const schema = Joi.object({
        short_intro: Joi.string().required(),
        long_intro: Joi.string().required(),
        services_name: Joi.string().required(),
        service_availability: Joi.string().required(),
        price: Joi.number().required(),
        position: Joi.string().required(),
        languages: Joi.string().required(),
        address: Joi.string().required(),
        location_service: Joi.string().required(),
        banner: Joi.string().required(),
        profile_id_profile: Joi.required()
    });

    const chefData = { ...chef, profile_id_profile };

    try {
        const value = await schema.validateAsync(chefData);

    } catch (error) {
        throw new Error(error);
    }

    const conn = await pool.getConnection();
    const result = await conn.query(profileModel.CreateChef(chefData));
    conn.release();
}

async function validatorProfile(profile) {
    const schema = Joi.object({
        name: Joi.string().required(),
        lastname: Joi.string().required(),
        birthday: Joi.date().required(),
        gender: Joi.string().required(),
        phone: Joi.number().required(),
        status: Joi.number(),
        photo: Joi.string().required(),
        role: Joi.any().valid(Role.Chef, Role.User).required(),
        address: Joi.string().required()
    });

    try {
        const value = await schema.validateAsync(profile);

    } catch (err) {
        throw new Error(err);
    }
}