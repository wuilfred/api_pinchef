const pool = require("../../../helpers/db");
const Role = require("../../../helpers/role");
const profileModel = require("../models/profileModel");
const Joi = require("joi");

module.exports = {
    create,
    detail,
    update,
    delete: _delete,
};

/**
 * @apiDefine token jwtToken
 * @apiHeader {String} token jwt Token.
 *
 * @apiHeaderExample {String} Request-Example:
 * { "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOjMsImlhdCI6MTYwNjUzNjM3NSwiZXhwIjoxNjA2NjIyNzc1fQ.8fMBJSBMAXRc-FNIiBmjaTuYy4_ASLO3CWQVKuo1KYM" }
 *
 */

async function create(req, res, next) {
    const id_user = req.params.id;
    const { profile, address, chef } = req.body;
    try {
        // Step 1 - Save profile
        await validatorProfile(profile);
        const isProfile = await checkProfileExist(id_user);

        // Check profile not exists
        if (isProfile[0].userExist === 0) {
            const conn = await pool.getConnection();
            const result = await conn.query(profileModel.Create(id_user, profile));
            conn.release();

            // Continue if profile was inserted
            if (result.affectedRows > 0) {
                const id_profile = result.insertId;

                // If it's chef save him
                if (profile.role === Role.Chef) {
                    const create_Chef = await createChef(chef, id_profile);
                }
                // Step 3 - Save address
                const create_address = await createAddress(
                    id_user,
                    id_profile,
                    address,
                    profile.address
                );
            }

            res.status(200).json({
                status: true,
                message: "Successful Operation",
                data: result,
            });

        } else {
            res.status(400).json({
                status: false,
                message: "Operation failed",
                details: 'The profile already exists'
            });
        }

    } catch (error) {
        res.status(500).json({
            status: false,
            message: "Operation failed",
            details: error.message,
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

async function update(req, res, next) {
    const id_profile = req.params.id;
    const { profile, address, chef } = req.body;
    try {
        await validatorProfile(profile);
        const conn = await pool.getConnection();
        const result = await conn.query(profileModel.Update(id_profile, profile));
        conn.release();

        if (result.affectedRows > 0) {
            // If it's chef edit him
            if (profile.role === Role.Chef) {
                console.log('entro');
                const update_Chef = await updateChef(chef, id_profile);
            }
            // Step 3 - update address
            const update_address = await updateAddress(
                id_profile,
                address,
                profile.address
            );
        }

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

async function _delete(req, res, next) {
    const id_user = req.params.id;
    try {
        const conn = await pool.getConnection();
        const result = await conn.query(profileModel.Delete(id_user));
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

async function createAddress(
    user_id_user,
    id_profile,
    address,
    first_address
) {
    const addressData = { ...address, first_address };
    await validatorAddress(addressData);
    const conn = await pool.getConnection();
    const result = await conn.query(profileModel.CreateAddress(addressData, id_profile, user_id_user));
    conn.release();
}

async function updateAddress(id_profile, address, first_address) {
    const addressData = { ...address, first_address };
    await validatorAddress(addressData);

    const conn = await pool.getConnection();
    const result = await conn.query(profileModel.UpdateAddress(id_profile, addressData));
    conn.release();
}

async function createChef(chef, id_profile) {
    await validatorChef(chef);
    const conn = await pool.getConnection();
    const result = await conn.query(profileModel.CreateChef(chef, id_profile));
    conn.release();
}

async function updateChef(chef, id_profile) {
    await validatorChef(chef);
    const conn = await pool.getConnection();
    const result = await conn.query(profileModel.UpdateChef(id_profile, chef));
    conn.release();
}

async function checkProfileExist(id_user) {
    try {
        const conn = await pool.getConnection();
        const result = await conn.query(profileModel.CheckProfileExist(id_user));
        conn.release();

        return result;
    } catch (error) {
        throw new Error(error);
    }
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
        address: Joi.string().required(),
    });

    await schema.validateAsync(profile);
}

async function validatorAddress(address) {
    const schema = Joi.object({
        first_address: Joi.string().required(),
        second_address: Joi.string().required(),
        country: Joi.string().required(),
        state_region: Joi.string().required(),
        city: Joi.string().required(),
        postcode: Joi.number().required(),
        lat_lon: Joi.string().required(),
        about_info: Joi.string().required()
    });

    await schema.validateAsync(address);
}

async function validatorChef(chef) {
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
    });

    await schema.validateAsync(chef);
}
