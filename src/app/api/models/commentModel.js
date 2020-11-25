class Comment {

    constructor() {
        this.rs = '';
    }

    Create(id_post, comment) {
        this.rs = `INSERT INTO post_comment (comment, post_id_post, user_id_user, status, created, updated)
                   VALUES ('${comment.comment}', '${id_post}', '${comment.id_user}', 1, now(), now())`;
        return this.rs;
    };

    Update(id_comment, comment) {
        this.rs = `UPDATE post_comment SET comment = '${comment.comment}', status = '${comment.status}',
                   updated = now() WHERE id_post_comment = '${id_comment}'`;
        return this.rs;
    };

    Detail(id_comment) {
        this.rs = `SELECT * FROM post_comment WHERE id_post_comment = '${id_comment}'`;
        return this.rs;
    };

    GetByPost(id_post) {
        this.rs = `SELECT * FROM post_comment WHERE post_id_post = '${id_post}'`;
        return this.rs;
    };

    Delete(id_comment) {
        this.rs = `DELETE FROM post_comment WHERE id_post_comment = '${id_comment}'`;
        return this.rs;
    };

}

const getComment = new Comment();
module.exports = getComment;