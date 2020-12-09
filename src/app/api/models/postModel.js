class Post {

    constructor() {
        this.rs = '';
    }

    Create(id_user, post) {
        this.rs = `INSERT INTO post (name, description, photo, location, privacy, time_zone, profile_id_profile, profile_user_id_user, status)
                   VALUES ('${post.name}', '${post.description}', '${post.photo}', '${post.location}', '${post.privacy}', '${post.time_zone}',
                   '${post.id_profile}', '${id_user}', 1)`;

        return this.rs;
    }

    Update(id_post, post) {
        this.rs = `UPDATE post SET name = '${post.name}', description = '${post.description}', photo = '${post.photo}', location = '${post.location}',
                   privacy = '${post.privacy}', time_zone = '${post.time_zone}', status = '${post.status}'
                   WHERE id_post = ${id_post}`;

        return this.rs;
    }

    Detail(id_post) {
        this.rs = `SELECT post.id_post, post.name AS post_name, post.description, post.photo AS post_photo, post.location, post.status,
                   post.privacy, post.time_zone, post.profile_id_profile, post.profile_user_id_user, profile.name AS profile_name, profile.lastname,
                   profile.photo AS profile_photo, COUNT( CASE WHEN post_like.status = 1 THEN post_like.post_id_post END ) AS likesQty,
                   COUNT( post_comment.post_id_post ) AS commentQty, 
                   COUNT( post_share.post_id_post ) AS shareQty 
                   FROM post
                   INNER JOIN profile ON post.profile_id_profile = profile.id_profile 
                   AND post.profile_user_id_user = profile.user_id_user
                   LEFT JOIN post_like ON post_like.post_id_post = post.id_post
                   LEFT JOIN post_comment ON post_comment.post_id_post = post.id_post 
                   LEFT JOIN post_share ON post_share.post_id_post = post.id_post 
                   WHERE post.id_post = ${id_post} AND post.status = 1 
                   GROUP BY post.id_post, post.name, post.description, post.photo, post.location, post.status, post.privacy, post.time_zone,
                   post.profile_id_profile, post.profile_user_id_user ORDER BY post_id DESC`;

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
                   (SELECT COUNT(*) FROM post_comment WHERE post_comment.post_id_post = post_id AND post_comment.STATUS = 1) AS commentQty,
                   (SELECT COUNT(*) FROM post_like WHERE post_like.post_id_post = post_id AND post_like.status = 1) AS likesQty,
                   (SELECT COUNT(*) FROM post_share WHERE post_share.post_id_post = post_id) AS shareQty 
                   FROM post
                   INNER JOIN profile ON post.profile_id_profile = profile.id_profile AND post.profile_user_id_user = profile.user_id_user
                   LEFT JOIN post_comment ON post_comment.post_id_post = post.id_post
                   LEFT JOIN post_like ON post_like.post_id_post = post.id_post 
                   LEFT JOIN post_share ON post_share.post_id_post = post.id_post 
                   WHERE post.profile_user_id_user = ${id_user} 
                   GROUP BY post_id, post_name, post_photo, post.description, post.location, post.photo, post.location, post.status, post.privacy,
                   post.time_zone, post.profile_id_profile, post.profile_user_id_user, profile_name, profile.lastname, profile_photo ORDER BY post_id DESC`;

        return this.rs;
    }

    getComments(id_post) {
        this.rs = `SELECT * FROM post_comment WHERE status = 1 AND post_id_post = '${id_post}' ORDER BY id_post_comment DESC`;
        return this.rs;
    }

    Delete(id_post) {
        this.rs = `DELETE FROM post WHERE id_post = ${id_post}`;
        return this.rs;
    }
}

const getPost = new Post();
module.exports = getPost;