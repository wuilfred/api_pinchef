class Post {

    constructor() {
        this.rs = '';
        this.tableLike = '`like`';
    }

    Create(id_user, post) {
        this.rs = `INSERT INTO post (name, description, location, status, privacy, time_zone, created, updated, profile_id_profile, profile_user_id_user)
                   VALUES ('${post.name}', '${post.description}', '${post.location}', 1, '${post.privacy}', '${post.time_zone}', 
                   now(), '', '${post.id_profile}', '${id_user}')`;
        return this.rs;
    }

    Update(id_post, post) {
        const photo =  post.photo == null || post.photo == undefined ? null : post.photo;
        this.rs = `UPDATE post SET name = '${post.name}', description = '${post.description}', photo = '${photo}', location = '${post.location}',
                   privacy = '${post.privacy}', time_zone = '${post.time_zone}', status = '${post.status}', updated = now()
                   WHERE id_post = ${id_post};`;
        console.log(this.rs);
        return this.rs;
    }

    Detail(id_post) {
        this.rs = `SELECT post.id_post, post.name AS post_name, post.description, post.photo AS post_photo, post.location, post.status,
                   post.privacy, post.time_zone, post.profile_id_profile, post.profile_user_id_user, profile.name AS profile_name, profile.lastname,
                   profile.photo AS profile_photo,
                   (SELECT COUNT(*) FROM ${this.tableLike} WHERE ${this.tableLike}.id_post = post.id_post AND ${this.tableLike}.status = 1)
                   AS likesQty,
                   (SELECT COUNT(*) FROM share WHERE share.id_post = post.id_post)
                   AS shareQty,
                   (SELECT COUNT(*) FROM comment WHERE comment.id_post = post.id_post)
                   AS commentQty
                   post.created, post.update
                   FROM post
                   INNER JOIN profile ON post.profile_id_profile = profile.id_profile 
                   AND post.profile_user_id_user = profile.user_id_user
                   LEFT JOIN ${this.tableLike} ON post.id_post = ${this.tableLike}.id_post
                   LEFT JOIN share ON post.id_post = share.id_post
                   LEFT JOIN comment ON post.id_post = comment.id_post
                   WHERE post.id_post = ${id_post} AND post.status = 1 
                   GROUP BY post.id_post, post.name, post.description, post.photo, post.location, post.status, post.privacy, post.time_zone,
                   post.profile_id_profile, post.profile_user_id_user ORDER BY post.id_post DESC`;

        return this.rs;
    }

    getAll() {
        this.rs = `SELECT * FROM post ORDER BY id_post DESC;`;
        return this.rs;
    }

    getByProfile(id_user) {
        this.rs = `SELECT  post.id_post AS post_id,  post.name AS post_name, post.description, post.photo AS post_photo, post.location,
                   post.status, post.privacy, post.time_zone, post.profile_id_profile, post.profile_user_id_user, profile.name AS profile_name,
                   profile.lastname, profile.photo AS profile_photo,
                   (SELECT COUNT(*) FROM comment WHERE comment.id_post = post_id AND comment.STATUS = 1) AS commentQty,
                   (SELECT COUNT(*) FROM ${this.tableLike} WHERE ${this.tableLike}.id_post = post_id AND ${this.tableLike}.status = 1) AS likesQty,
                   (SELECT COUNT(*) FROM share WHERE share.id_post = post_id) AS shareQty,
                   post.created, post.update
                   FROM post
                   INNER JOIN profile ON post.profile_id_profile = profile.id_profile AND post.profile_user_id_user = profile.user_id_user
                   LEFT JOIN comment ON comment.id_post = post.id_post
                   LEFT JOIN ${this.tableLike} ON ${this.tableLike}.id_post = post.id_post 
                   LEFT JOIN share ON share.id_post = post.id_post 
                   WHERE post.profile_user_id_user = ${id_user} 
                   GROUP BY post_id, post_name, post_photo, post.description, post.location, post.photo, post.location, post.status, post.privacy,
                   post.time_zone, post.profile_id_profile, post.profile_user_id_user, profile_name, profile.lastname, profile_photo ORDER BY post_id DESC`;
        console.log(this.rs);
        return this.rs;
    }

    getComments(id_post) {
        this.rs = `SELECT comment.id_comment, comment.comment, comment.status, comment.created, comment.updated, comment.id_post, comment.user_id_user,
                   (SELECT COUNT(*) FROM ${this.tableLike} WHERE ${this.tableLike}.id_comment = comment.id_comment 
                   AND ${this.tableLike}.status = 1) AS likesQty
                   FROM comment 
                   WHERE comment.status = 1 AND comment.id_post = '${id_post}'
                   ORDER BY comment.id_comment DESC limit 500`;
        return this.rs;
    }

    Delete(id_post) {
        this.rs = `DELETE FROM post WHERE id_post = ${id_post}`;
        return this.rs;
    }

    SavePicturePost(id_post, picture) {
        this.rs = `UPDATE post SET photo = '${picture}' WHERE id_post = '${id_post}'`;
        return this.rs;
    }
}

const getPost = new Post();
module.exports = getPost;