class Like {

    constructor() {
        this.rs = '';
    }

    checklikeExist(id_post, id_user) {
        this.rs = `SELECT * FROM post_like WHERE post_id_post = ${id_post} AND user_id_user = ${id_user}`;
        return this.rs;
    };

    createLikePost(id_post, like) {
        this.rs = `INSERT INTO post_like (type, post_id_post, user_id_user, status, created , updated)
                   VALUES('${like.type}', '${id_post}', '${like.id_user}', 1, now(), now())`;
        return this.rs;
    };

    changeActionLikePost(id_post, id_user, status) {
        this.rs = `UPDATE post_like SET status = ${status} WHERE post_id_post = ${id_post} AND user_id_user = ${id_user}`;
        return this.rs;
    };

    getLikesPost(id_post) {
        this.rs = `SELECT COUNT (*) AS likesQty FROM post_like WHERE post_id_post = '${id_post}' and status = 1`;
        return this.rs;
    }

}

const getLike = new Like();
module.exports = getLike;