const pool = require("../../../helpers/db");
const likeModel = require('../models/likeModel');
const Joi = require("joi");

module.exports = {
    likeOrDislikePost,
}

async function likeOrDislikePost(req, res, next) {
    const id_post = req.params.id;
    const like = req.body;

    try {
        const schema = Joi.object({
            status: Joi.number(),
            type: Joi.string().required(),
            id_user: Joi.number().required()
        });
        await schema.validateAsync(like);

        const hasLike = await checklikeExist(id_post, like.id_user);
        const conn = await pool.getConnection();
        let result;

        if (hasLike[0] !== undefined) {
            const status = hasLike[0].status === 0 ? 1 : 0;
            result = await conn.query(likeModel.changeActionLikePost(id_post, like.id_user, status));
            conn.release();

        } else {
            result = await conn.query(likeModel.createLikePost(id_post, like));
            conn.release();
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

async function checklikeExist(id_post, id_user) {
    try {
        const conn = await pool.getConnection();
        const result = conn.query(likeModel.checklikeExist(id_post, id_user));
        conn.release();

        return result;
    } catch (error) {
        throw new Error(error);
    }
}
