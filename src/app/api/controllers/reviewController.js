const reviewsModel = require('../models/reviewModel');
const pool = require("../../../helpers/db");
const Joi = require("joi");

module.exports = {
    create,
    update,
    detail,
    delete: _delete,
};

async function create(req, res, next) {
    const id_chef = req.params.id;
    const reviews = req.body;
    try {
        await validatorReviews({ ...reviews, id_chef });
        const isReview = await checkReviewExist(id_chef);

        // Check review not exists
        if (isReview[0].reviewExist === 0) {
            const conn = await pool.getConnection();
            const result = await conn.query(reviewsModel.Create(id_chef, reviews));
            conn.release();

            res.status(200).json({
                status: true,
                message: "Successful Operation",
                data: result,
            });
        } else {
            res.status(400).json({
                status: false,
                message: "Operation failed",
                details: 'The review already exists'
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

async function update(req, res, next) {
    const id_chef = req.params.id;
    const reviews = req.body;
    try {
        await validatorReviews(reviews);
        const conn = await pool.getConnection();
        const result = await conn.query(reviewsModel.Update(id_chef, reviews));
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
    const id_chef = req.params.id;
    try {
        const conn = await pool.getConnection();
        const result = await conn.query(reviewsModel.Detail(id_chef));
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
        const result = await conn.query(reviewsModel.CheckReviewExist(id_chef));
        conn.release();

        return result;
    } catch (error) {
        throw new Error(error);
    }
}

async function _delete(req, res, next) {
    const id_chef = req.params.id;
    try {
        const conn = await pool.getConnection();
        const result = await conn.query(reviewsModel.Delete(id_chef));
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

async function validatorReviews(review) {
    const schema = Joi.object({
        name: Joi.string().required(),
        description: Joi.string().required(),
        raiting: Joi.number().required(),
        followers: Joi.number().required(),
        share: Joi.number().required(),
        likes: Joi.number().required(),
        id_chef: Joi.number().required()
    });

    await schema.validateAsync(review);
}