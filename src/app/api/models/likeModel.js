class Like {

    constructor() {
        this.rs = '';
        this.table = '`like`';
    }

    checklikeExist(id, id_user, type) {
        this.rs = `SELECT * FROM ${this.table} WHERE type = '${type}' AND id_${type} = '${id}' AND user_id_user = '${id_user}'`;
        return this.rs;
    };

    createLike(id, like) {
        this.rs = `INSERT INTO ${this.table} (type, id_${like.type}, user_id_user, status, created , updated)
                   VALUES('${like.type}', '${id}', '${like.id_user}', 1, now(), now())`;
        return this.rs;
    };

    changeActionLike(id, status) {
        this.rs = `UPDATE ${this.table}v SET status = '${status}' WHERE id_like = '${id}'`;
        return this.rs;
    };

    getLikes(id, type) {
        this.rs = `SELECT COUNT (*) AS likesQty FROM ${this.table} WHERE id_${type} = '${id}' and status = 1`;
        return this.rs;
    }

}

const getLike = new Like();
module.exports = getLike;