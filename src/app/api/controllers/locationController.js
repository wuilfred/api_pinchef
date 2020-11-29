const pool = require("../../../helpers/db");
const locationModel = require('../models/locationModel');

module.exports = {
    getAllCountry,
    getAllCityForCountry,
}

/**
   * @api {get} /location/getAllCountry/ Get countries
   * @apiVersion 0.0.1
   * @apiGroup Location
   * @apiName GetContry
   *
   * @apiDescription Get all country
   * 
   * @apiUse token
   *
   * 
   * @apiSuccessExample Success-Response:
   * HTTP/1.1 200 OK
   *{
   * "status": true,
   * "data": "status": true,
    "message": "Successful Operation",
    "data": [
        {
            "iso": "AD",
            "name": "Andorra"
        },
        {
            "iso": "AE",
            "name": "United Arab Emirates"
        },
        {
            "iso": "AF",
            "name": "Afghanistan"
        },
        {
            "iso": "AG",
            "name": "Antigua and Barbuda"
        },...
*}
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
async function getAllCountry(req, res, next) {
    try {
        const conn = await pool.getConnection();
        const result = await conn.query(locationModel.getAllCountry());
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
   * @api {get} /location/getAllCityForCountry/country_iso Get Cities
   * @apiVersion 0.0.1
   * @apiGroup Location
   * @apiName GetCities
   *
   * @apiDescription Get all cities of a country
   * 
   * @apiUse token
   *
   * 
   * @apiSuccessExample Success-Response:
   * HTTP/1.1 200 OK
   *{
   * "status": true,
   * "data": "status": true,
    "message": "Successful Operation",
    "data": [
        {
            "iso": "AD",
            "name": "Andorra"
        },
        {
            "iso": "AE",
            "name": "United Arab Emirates"
        },
        {
            "iso": "AF",
            "name": "Afghanistan"
        },
        {
            "iso": "AG",
            "name": "Antigua and Barbuda"
        },...
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
async function getAllCityForCountry(req, res, next) {
    const iso = req.params.id;
    try {
        const conn = await pool.getConnection();
        const result = await conn.query(locationModel.getAllCityForCountry(iso));
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