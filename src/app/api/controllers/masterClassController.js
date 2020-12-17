const masterClassModel = require('../models/masterClassModel');
const pool = require("../../../helpers/db");
const Joi = require("joi");
const uploadObj = require('../../../helpers/aws-sdk');

module.exports = {
    create,
    update,
    detail,
    delete: _delete,
    getAllForChef,
    getAll
};

/**
* @api {post} /master_clase/create/:id_chef  Create  Master Class
* @apiVersion 0.0.1
* @apiGroup Master Class
* @apiName CreateMasterClass
* @apiUse token
*
* @apiDescription Create Master Class
*
* @apiParam {string} title  title
* @apiParam {string} cousine  cousine
* @apiParam {string} dietary  dietary
* @apiParam {string} description  description
* @apiParam {string} link  link
* @apiParam {string} ingredient_list  ingredient list
* @apiParam {date} start_date  start date
* @apiParam {date} class_duration  class duration
* @apiParam {number} ticket_count  ticket count
* @apiParam {number} ticket_price  ticket price
* @apiParam {number} notified  notified
* @apiParam {file} file  picture (is optional)
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
        "insertId": 14,
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
async function create(req, res, next) {
    const id_chef = req.params.id;
    const masterClass = req.body;
    const file = req.files !== null ? req.files.file : null;

    try {
        await validatorMasterClass({ ...masterClass, id_chef });
        const conn = await pool.getConnection();
        const resultCreate = await conn.query(masterClassModel.Create(id_chef, masterClass));
        conn.release();

        if (file !== null) {
            if (resultCreate.affectedRows === 1) {
                const id = resultCreate.insertId;
                const response = await uploadObj(id, file, 'master_class', true);
                const conn = await pool.getConnection();
                const result = await conn.query(masterClassModel.SavePicture(id, response.location));
                conn.release();
            }
            res.status(200).json({
                status: true,
                message: "Successful Operation",
                data: resultCreate,
            });
        }
        res.status(200).json({
            status: true,
            message: "Successful Operation",
            data: resultCreate,
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
* @api {put} /master_clase/update/:id_masterClass  Update Master Class
* @apiVersion 0.0.1
* @apiGroup Master Class
* @apiName UpdateMasterClass
* @apiUse token
*
* @apiDescription Update Master Class
*
* @apiParam {string} title  title
* @apiParam {string} cousine  cousine
* @apiParam {string} dietary  dietary
* @apiParam {string} description  description
* @apiParam {string} link  link
* @apiParam {string} ingredient_list  ingredient list
* @apiParam {date} start_date  start date
* @apiParam {date} class_duration  class duration
* @apiParam {number} ticket_count  ticket count
* @apiParam {number} ticket_price  ticket price
* @apiParam {number} notified  notified
* @apiParam {file} file  picture (is optional)
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
async function update(req, res, next) {
    const id_masterClass = req.params.id;
    const masterClass = req.body;
    const file = req.files !== null ? req.files.file : null;
    try {
        await validatorMasterClass(masterClass);
        const conn = await pool.getConnection();
        const resultUpdate = await conn.query(masterClassModel.Update(id_masterClass, masterClass));
        conn.release();
        
        if (resultUpdate.affectedRows === 1) {
            if (file !== null) {
                const response = await uploadObj(id_masterClass, file, 'master_class', true);
                const conn = await pool.getConnection();
                const result = await conn.query(masterClassModel.SavePicture(id_masterClass, response.location));
                conn.release();
            }

            res.status(200).json({
                status: true,
                message: "Successful Operation",
                data: resultUpdate,
            });
        }
        res.status(200).json({
            status: true,
            message: "Successful Operation",
            data: resultUpdate,
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
* @api {get} /master_clase/detail/:id_masterClass  Detail Master Class
* @apiVersion 0.0.1
* @apiGroup Master Class
* @apiName DetailMasterClass
* @apiUse token
*
* @apiDescription Get Master Class
*
* @apiSuccessExample Success-Response:
* HTTP/1.1 200 OK
*
* {
    "status": true,
    "message": "Successful Operation",
    "data": [
        {
            "id_master_class": 7,
            "title": "master-title07",
            "cousine": "gourmet2",
            "dietary": "verduras",
            "description": "lorem ipsum dolor",
            "ingredient_list": "ingredientes",
            "start_date": "2020-11-27T05:00:00.000Z",
            "class_duration": "00:00:15",
            "ticket_count": 25,
            "ticket_price": 60,
            "notified": "1",
            "master_class_photo": "https://pinchef.s3.amazonaws.com/master_class/7/avengers_infinity_war_2018_movie_doctor_strange-wallpaper-3840x2160.jpg",
            "link": null,
            "id_chef": 1,
            "created": "2020-12-09T06:56:42.000Z",
            "updated": "2020-12-09T06:56:42.000Z",
            "id_profile": 32,
            "position": "senior",
            "chef_photo": "https://pinchef.s3.amazonaws.com/chef/1/avengers_infinity_war_2018_movie_doctor_strange-wallpaper-3840x2160.jpg",
            "id_user": 2,
            "name": "John",
            "lastname": "Doe",
            "likesQty": 1,
            "shareQty": 0,
            "commentQty": 0
        }
    ]
}
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
    const id_masterClass = req.params.id;
    try {
        const conn = await pool.getConnection();
        const result = await conn.query(masterClassModel.Detail(id_masterClass));
        conn.release();

        res.status(200).json({
            status: true,
            message: result.length > 0 ? "Successful Operation" : "Record not found!",
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
* @api {get} /master_clase/getAll/  Get All Master Class
* @apiVersion 0.0.1
* @apiGroup Master Class
* @apiName GetAllMasterClass
* @apiUse token
*
* @apiDescription Get All Master Class
*
* @apiSuccessExample Success-Response:
* HTTP/1.1 200 OK
*
{
    "status": true,
    "message": "Successful Operation",
    "data": [
        {
            "id_master_class": 7,
            "title": "master-title07",
            "cousine": "gourmet2",
            "dietary": "verduras",
            "description": "lorem ipsum dolor",
            "ingredient_list": "ingredientes",
            "start_date": "2020-11-27T05:00:00.000Z",
            "class_duration": "00:00:15",
            "ticket_count": 25,
            "ticket_price": 60,
            "notified": "1",
            "mc_photo": "https://pinchef.s3.amazonaws.com/master_class/7/avengers_infinity_war_2018_movie_doctor_strange-wallpaper-3840x2160.jpg",
            "link": null,
            "id_chef": 1,
            "created": "2020-12-09T06:56:42.000Z",
            "updated": "2020-12-09T06:56:42.000Z",
            "id_profile": 32,
            "position": "senior",
            "chef_photo": "https://pinchef.s3.amazonaws.com/chef/1/avengers_infinity_war_2018_movie_doctor_strange-wallpaper-3840x2160.jpg",
            "id_user": 2,
            "name": "John",
            "lastname": "Doe",
            "likesQty": 1,
            "shareQty": 0,
            "commentQty": 0
        },
        {
            "id_master_class": 6,
            "title": "master-title2",
            "cousine": "gourmet2",
            "dietary": "verduras",
            "description": "lorem ipsum dolor",
            "ingredient_list": "ingredientes",
            "start_date": "2020-11-27T05:00:00.000Z",
            "class_duration": "00:00:15",
            "ticket_count": 25,
            "ticket_price": 60,
            "notified": "1",
            "mc_photo": null,
            "link": null,
            "id_chef": 1,
            "created": "2020-12-09T06:55:42.000Z",
            "updated": "2020-12-09T06:55:42.000Z",
            "id_profile": 32,
            "position": "senior",
            "chef_photo": "https://pinchef.s3.amazonaws.com/chef/1/avengers_infinity_war_2018_movie_doctor_strange-wallpaper-3840x2160.jpg",
            "id_user": 2,
            "name": "John",
            "lastname": "Doe",
            "likesQty": 0,
            "shareQty": 0,
            "commentQty": 0
        },
        {
            "id_master_class": 5,
            "title": "master-title2",
            "cousine": "gourmet2",
            "dietary": "verduras",
            "description": "lorem ipsum dolor",
            "ingredient_list": "ingredientes",
            "start_date": "2020-11-27T05:00:00.000Z",
            "class_duration": "00:00:15",
            "ticket_count": 25,
            "ticket_price": 60,
            "notified": "1",
            "mc_photo": "https://pinchef.s3.amazonaws.com/master_class/5/avengers_infinity_war_2018_movie_doctor_strange-wallpaper-3840x2160.jpg",
            "link": null,
            "id_chef": 1,
            "created": "2020-12-09T05:34:30.000Z",
            "updated": "2020-12-09T05:34:30.000Z",
            "id_profile": 32,
            "position": "senior",
            "chef_photo": "https://pinchef.s3.amazonaws.com/chef/1/avengers_infinity_war_2018_movie_doctor_strange-wallpaper-3840x2160.jpg",
            "id_user": 2,
            "name": "John",
            "lastname": "Doe",
            "likesQty": 0,
            "shareQty": 0,
            "commentQty": 0
        }
    ]
}
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
async function getAll(req, res, next) {
    try {
        const conn = await pool.getConnection();
        const result = await conn.query(masterClassModel.GetAll());
        conn.release();

        res.status(200).json({
            status: true,
            message: result.length > 0 ? "Successful Operation" : "Record not found!",
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
* @api {get} /master_clase/getAllForChef/:id_chef  Get All for chef
* @apiVersion 0.0.1
* @apiGroup Master Class
* @apiName GetAllForChef
* @apiUse token
*
* @apiDescription  Get All for chef
*
* @apiSuccessExample Success-Response:
* HTTP/1.1 200 OK
*
{
    "status": true,
    "message": "Successful Operation",
    "data": [
        {
            "id_master_class": 7,
            "title": "master-title07",
            "cousine": "gourmet2",
            "dietary": "verduras",
            "description": "lorem ipsum dolor",
            "ingredient_list": "ingredientes",
            "start_date": "2020-11-27T05:00:00.000Z",
            "class_duration": "00:00:15",
            "ticket_count": 25,
            "ticket_price": 60,
            "notified": "1",
            "mc_photo": "https://pinchef.s3.amazonaws.com/master_class/7/avengers_infinity_war_2018_movie_doctor_strange-wallpaper-3840x2160.jpg",
            "link": null,
            "id_chef": 1,
            "created": "2020-12-09T06:56:42.000Z",
            "updated": "2020-12-09T06:56:42.000Z",
            "id_profile": 32,
            "position": "senior",
            "chef_photo": "https://pinchef.s3.amazonaws.com/chef/1/avengers_infinity_war_2018_movie_doctor_strange-wallpaper-3840x2160.jpg",
            "id_user": 2,
            "name": "John",
            "lastname": "Doe",
            "likesQty": 1,
            "shareQty": 0,
            "commentQty": 0
        },
        {
            "id_master_class": 6,
            "title": "master-title2",
            "cousine": "gourmet2",
            "dietary": "verduras",
            "description": "lorem ipsum dolor",
            "ingredient_list": "ingredientes",
            "start_date": "2020-11-27T05:00:00.000Z",
            "class_duration": "00:00:15",
            "ticket_count": 25,
            "ticket_price": 60,
            "notified": "1",
            "mc_photo": null,
            "link": null,
            "id_chef": 1,
            "created": "2020-12-09T06:55:42.000Z",
            "updated": "2020-12-09T06:55:42.000Z",
            "id_profile": 32,
            "position": "senior",
            "chef_photo": "https://pinchef.s3.amazonaws.com/chef/1/avengers_infinity_war_2018_movie_doctor_strange-wallpaper-3840x2160.jpg",
            "id_user": 2,
            "name": "John",
            "lastname": "Doe",
            "likesQty": 0,
            "shareQty": 0,
            "commentQty": 0
        },
        {
            "id_master_class": 5,
            "title": "master-title2",
            "cousine": "gourmet2",
            "dietary": "verduras",
            "description": "lorem ipsum dolor",
            "ingredient_list": "ingredientes",
            "start_date": "2020-11-27T05:00:00.000Z",
            "class_duration": "00:00:15",
            "ticket_count": 25,
            "ticket_price": 60,
            "notified": "1",
            "mc_photo": "https://pinchef.s3.amazonaws.com/master_class/5/avengers_infinity_war_2018_movie_doctor_strange-wallpaper-3840x2160.jpg",
            "link": null,
            "id_chef": 1,
            "created": "2020-12-09T05:34:30.000Z",
            "updated": "2020-12-09T05:34:30.000Z",
            "id_profile": 32,
            "position": "senior",
            "chef_photo": "https://pinchef.s3.amazonaws.com/chef/1/avengers_infinity_war_2018_movie_doctor_strange-wallpaper-3840x2160.jpg",
            "id_user": 2,
            "name": "John",
            "lastname": "Doe",
            "likesQty": 0,
            "shareQty": 0,
            "commentQty": 0
        }
    ]
}
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
async function getAllForChef(req, res, next) {
    const id_chef = req.params.id;
    try {
        const conn = await pool.getConnection();
        const result = await conn.query(masterClassModel.GetAllForChef(id_chef));
        conn.release();

        res.status(200).json({
            status: true,
            message: result.length > 0 ? "Successful Operation" : "Record not found!",
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

/**
* @api {delete} /master_clase/delete/:id_masterClass  Delete 
* @apiVersion 0.0.1
* @apiGroup Master Class
* @apiName DeleteMasterClass
* @apiUse token
*
* @apiDescription Delete master class 
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
* }
*/
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
        link: Joi.string().required(),
        ingredient_list: Joi.string().required(),
        start_date: Joi.date().required(),
        class_duration: Joi.date().required(),
        ticket_count: Joi.number().required(),
        ticket_price: Joi.number().required(),
        notified: Joi.number().required()
        //id_master_class: Joi.number().required()
    });

    await schema.validateAsync(review);
}