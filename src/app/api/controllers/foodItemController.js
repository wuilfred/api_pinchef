const foodItemModel = require('../models/foodItemModel');
const pool = require("../../../helpers/db");
const Joi = require("joi");
const uploadObj = require('../../../helpers/aws-sdk');
var moment = require('moment'); 

module.exports = {
    create,
    update,
    detail,
    getItemsByChef,
    getAllItems,
    delete: _delete,
};

/**
* @api {post} /foodItem/create/:id_chef  Create 
* @apiVersion 0.0.1
* @apiGroup FoodItem
* @apiName CreateFoodItem
* @apiUse token
*
* @apiDescription Create a foodItem
*
* @apiParam {string} name  Name
* @apiParam {string} description  Description
* @apiParam {date} day  Photo
* @apiParam {date} hour  Hour
* @apiParam {price} price   Price
* @apiParam {string} picture  Picture
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
        "insertId": 2,
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
    const foodItem = req.body;
    const file = req.files !== null ? req.files.file : null;
    const isDay = moment(`${req.body.day}`, "YYYY-MM-DD", true).isValid();
    const isHour = moment(`${req.body.hour}`, "HH:mm", true).isValid();

    try {
        await validatorFoodItem({ ...foodItem, id_chef });
        if(isDay == isHour){
            const conn = await pool.getConnection();
            const resultCreate = await conn.query(foodItemModel.Create(id_chef, foodItem));
            conn.release();

            if (file !== null) {
                if (resultCreate.affectedRows === 1) {
                    const id = resultCreate.insertId;
                    const response = await uploadObj(id, file, 'post', true);
                    const conn = await pool.getConnection();
                    const result = await conn.query(foodItemModel.SavePicture(id, response.location));
                    conn.release();
                }
            }
            res.status(200).json({
                status: true,
                message: "Successful Operation",
                data: resultCreate,
            });
        }else{
            res.status(400).json({
                status: true,
                message: "Successful Operation",
                data: 'Date or Hour is invalid',
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
* @api {put} /foodItem/update/:id_food_item  Update 
* @apiVersion 0.0.1
* @apiGroup FoodItem
* @apiName UpdateFoodItem
* @apiUse token
*
* @apiDescription Update a foodItem
*
* @apiParam {string} name  Name
* @apiParam {string} description  Description
* @apiParam {date} day  Photo
* @apiParam {date} hour  Hour
* @apiParam {price} price   Price
* @apiParam {string} picture  Picture
* @apiParam {number} id_chef  Chef_id
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
        "insertId": 2,
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
    const id_item = req.params.id;
    const foodItem = req.body;
    const file = req.files !== null ? req.files.file : null;
    const isDay = moment(`${req.body.day}`, "YYYY-MM-DD", true).isValid();
    const isHour = moment(`${req.body.hour}`, "HH:mm", true).isValid();

    try {
        await validatorFoodItem(foodItem);
        if(isDay == isHour){
            const conn = await pool.getConnection();
            const resultUpdate = await conn.query(foodItemModel.Update(id_item, foodItem));
            conn.release();

            if (resultUpdate.affectedRows === 1) {
                if (file !== null) {
                    const response = await uploadObj(id_item, file, 'food_item', true);
                    const conn = await pool.getConnection();
                    const result = await conn.query(foodItemModel.SavePicture(id_item, response.location));
                    conn.release();
                }

                res.status(200).json({
                    status: true,
                    message: "Successful Operation",
                    data: resultUpdate,
                });
            }
        }else{
            res.status(400).json({
                status: true,
                message: "Successful Operation",
                data: 'Date or Hour is invalid',
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
* @api {get} /foodItem/detail/:id_food_item  Detail 
* @apiVersion 0.0.1
* @apiGroup FoodItem
* @apiName DetailFoodItem
* @apiUse token
*
* @apiDescription Get a foodItem
*
* @apiSuccessExample Success-Response:
* HTTP/1.1 200 OK
*
* {
*"status": true,
 "message": "Successful Operation",
 "data": "status": true,
    "message": "Successful Operation",
    "data": [
        {
            "id_food_item": 5,
            "name": "Lorem",
            "description": "Lorem ipsum dolor",
            "day": 1,
            "hour": "00:00:04",
            "price": 55,
            "picture": "picture",
            "created": "2020-11-27T21:17:28.000Z",
            "updated": "2020-11-28T15:11:29.000Z",
            "chef_id_chef": 1
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

/**
* @api {get} /foodItem/getItemsByChef/:id_chef  GetItemsByChef 
* @apiVersion 0.0.1
* @apiGroup FoodItem
* @apiName GetItemsByChef
* @apiUse token
*
* @apiDescription Get all foodItem of the chef
*
* @apiSuccessExample Success-Response:
* HTTP/1.1 200 OK
*
* {
*"status": true,
 "message": "Successful Operation",
 "data": "status": true,
    "message": "Successful Operation",
    "data": [
        {
            "id_food_item": 5,
            "name": "Lorem",
            "description": "Lorem ipsum dolor",
            "day": 1,
            "hour": "00:00:04",
            "price": 55,
            "picture": "picture",
            "created": "2020-11-27T21:17:28.000Z",
            "updated": "2020-11-28T15:11:29.000Z",
            "chef_id_chef": 1
        },
        {
            "id_food_item": 3,
            "name": "Lorem",
            "description": "Lorem ipsum dolor",
            "day": 1,
            "hour": "00:00:04",
            "price": 55,
            "picture": "picture",
            "created": "2020-11-27T21:17:28.000Z",
            "updated": "2020-11-28T15:11:29.000Z",
            "chef_id_chef": 1
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

/**
* @api {get} /foodItem/getAllItems  GetAllItems 
* @apiVersion 0.0.1
* @apiGroup FoodItem
* @apiName GetAllItems
* @apiUse token
*
* @apiDescription Get all foodItem
*
* @apiSuccessExample Success-Response:
* HTTP/1.1 200 OK
*
* {
*"status": true,
 "message": "Successful Operation",
 "data": "status": true,
    "message": "Successful Operation",
     "data": [
        {
            "id_food_item": 6,
            "name": "Food title",
            "description": "Idjidhidh, sijwihwi, sojw8he8h, sihsibs, sihsihdihs, sibsihsih,",
            "day": null,
            "hour": "00:00:05",
            "price": 35,
            "picture": "https://pinchef.s3.amazonaws.com/food_item/8/IMG_1684.JPG",
            "created": "2020-12-09T05:22:44.000Z",
            "updated": "2020-12-09T05:22:44.000Z",
            "chef_id_chef": 6
        },
        {
            "id_food_item": 7,
            "name": "cerdo",
            "description": "Cedo asado",
            "day": null,
            "hour": "00:00:03",
            "price": 46,
            "picture": "https://pinchef.s3.amazonaws.com/food_item/8/IMG_1684.JPG",
            "created": "2020-12-09T05:24:40.000Z",
            "updated": "2020-12-09T05:24:40.000Z",
            "chef_id_chef": 6
        },
        {
            "id_food_item": 8,
            "name": "askdjb sandasnd ",
            "description": "Cedo asadodf sdf dsfsdfsdf fsfsfasaf",
            "day": null,
            "hour": "00:00:03",
            "price": 46,
            "picture": "https://pinchef.s3.amazonaws.com/food_item/8/IMG_1684.JPG",
            "created": "2020-12-09T05:25:21.000Z",
            "updated": "2020-12-09T05:25:21.000Z",
            "chef_id_chef": 6
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
async function getAllItems(req, res, next) {

    try {
        const conn = await pool.getConnection();
        const result = await conn.query(foodItemModel.getAllItems());
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


/**
* @api {delete} /foodItem/delete/:id_food_item  Delete 
* @apiVersion 0.0.1
* @apiGroup FoodItem
* @apiName DeleteFoodItem
* @apiUse token
*
* @apiDescription Delete a foodItem 
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
        day: Joi.date().raw().required(),
        hour: Joi.string().regex(/^([0-9]{2})\:([0-9]{2})$/),
        price: Joi.number().positive().greater(0).required(),
        //picture: Joi.string().required(),
        id_chef: Joi.number().required(),
    });

    await schema.validateAsync(foodItem);
}