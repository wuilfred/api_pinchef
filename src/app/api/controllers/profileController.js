const pool = require("../../../helpers/db");
const Role = require("../../../helpers/role");
const profileModel = require("../models/profileModel");
const Joi = require("joi");
const uploadObj = require('../../../helpers/aws-sdk');

module.exports = {
    create,
    detail,
    update,
    delete: _delete,
    uploadPhoto
};

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

/**
* @api {get} /profile/detail/:id_user  Detail
* @apiVersion 0.0.1
* @apiGroup Profile
* @apiName ProfileDetail
* @apiUse token
*
* @apiDescription Get detail of a profile
*
* @apiSuccessExample Success-Response:
* HTTP/1.1 200 OK
*
* {
* "status": true,
  "message": "Successful Operation",
  "data": [
     {
         "id_profile": 32,
         "name": "John",
         "lastname": "Doe",
         "birthday": "2020-11-27T23:00:00.000Z",
         "gender": "male",
         "phone": 2147483647,
         "status": 1,
         "photo": " photo",
         "profile_address": "SW 8",
         "role": "User",
         "user_id_user": 2,
         "id_chef": 1,
         "short_intro": "short_intro",
         "long_intro": "long_description",
         "services_name": "rt",
         "service_availability": "service",
         "price": 4,
         "position": "senior",
         "languages": "en",
         "chef_address": "SW 8",
         "location_service": "location_example",
         "banner": "banner_example",
         "id_address": 8,
         "country": "USA",
         "first_address": "SW 8",
         "second_address": "AVE 8",
         "state_region": "FLORIDA",
         "city": "MIAMI",
         "postcode": "95000",
         "lat_lon": " test",
         "about_info": "Lorem Ipsum Dolor"
     }
 ]
* }
*
* @apiSuccessExample Success-Response:
* HTTP/1.1 200 OK
*{
    "status": true,
    "message": "Not record found!",
    "data": []
}
*
* @apiErrorExample {json} Error-Response:
*  HTTP/1.1 500 Bad Request
* {
*    "status": false
*    "message": "Operation failed"
*    "detail": "Error Message"
*    
* }
*/
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

/**
* @api {get} /profile/delete/:id_user  Delete
* @apiVersion 0.0.1
* @apiGroup Profile
* @apiName ProfileDelete
* @apiUse token
*
* @apiDescription Delete a profile
*
* @apiSuccessExample Success-Response:
* HTTP/1.1 200 OK
*
* {
*"status": true,
 "message": "Successful Operation",
 "data": [
     {
        "affectedRows": 1,
        "insertId": 0,
        "warningStatus": 0
     }
 ]
* }
*
* @apiErrorExample {json} Error-Response:
*  HTTP/1.1 500 Bad Request
* {
*    "status": false
*    "message": "Operation failed"
*    "detail": "Error Message"
*    
* }
*/
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

async function uploadPhoto(req,res,next) {
    const {id} = req.params;
    const file = req.files.file;
    uploadObj(id, file, 'chef')
    .then(({ status, message, ...data}) => {res.json({ status , message, data});})
    .catch(next);    
}
