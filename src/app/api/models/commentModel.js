class Comment {

    constructor() {
        this.rs = '';
        this.tableLike = '`like`';
    }

    Create(id_post, comment) {
        this.rs = `INSERT INTO comment (comment, id_post, user_id_user, status, created, updated)
                   VALUES ('${comment.comment}', '${id_post}', '${comment.id_user}', 1, now(), now())`;
        return this.rs;
    };

    Update(id_comment, comment) {
        this.rs = `UPDATE comment SET comment.comment = '${comment.comment}', comment.status = '${comment.status}',
                   comment.updated = now() WHERE comment.id_comment = '${id_comment}'`;
        return this.rs;
    };

    Detail(id_comment) {
        this.rs = `SELECT comment.id_comment, comment.comment, comment.status, comment.created, comment.updated, comment.id_post,
                   comment.user_id_user, comment.type, comment.id_master_class, comment.id_food_service, comment.id_food_item, comment.id_chef,
                   (SELECT COUNT(*) FROM ${this.tableLike} WHERE ${this.tableLike}.id_comment = comment.id_comment AND ${this.tableLike}.status = 1) AS likesQty FROM comment
                   LEFT JOIN ${this.tableLike} ON ${this.tableLike}.id_comment = comment.id_comment 
                   WHERE comment.id_comment = '${id_comment}'`;
        return this.rs;
    };

    GetByPost(id_post) {
        this.rs = `SELECT comment.id_comment, comment.comment, comment.status, comment.created, comment.updated, comment.id_post,
                   comment.user_id_user, comment.type, comment.id_master_class, comment.id_food_service, comment.id_food_item, comment.id_chef,
                   (SELECT COUNT(*) FROM ${this.tableLike} WHERE ${this.tableLike}.id_comment = comment.id_comment AND ${this.tableLike}.status = 1) AS likesQty FROM comment
                   LEFT JOIN ${this.tableLike} ON ${this.tableLike}.id_comment = comment.id_comment 
                   WHERE comment.id_post = '${id_post}' ORDER BY comment.updated DESC limit 500 `;
        return this.rs;
    };

    Delete(id_comment) {
        this.rs = `DELETE FROM comment WHERE id_comment = '${id_comment}'`;
        return this.rs;
    };

}

const getComment = new Comment();
module.exports = getComment;