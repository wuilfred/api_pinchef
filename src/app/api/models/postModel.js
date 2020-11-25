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

    Detail(id_user) {
        this.rs = `SELECT profile.id_profile, profile.name, profile.lastname, profile.birthday, profile.gender, profile.phone,
                  profile.status, profile.photo, profile.address AS profile_address, profile.role, profile.user_id_user,
                  chef.id_chef, chef.short_intro, chef.long_intro, chef.services_name, chef.service_availability, chef.price, chef.position,
                  chef.languages, chef.address AS chef_address, chef.location_service, chef.banner, address_book.id_address,
                  address_book.country, address_book.first_address,  address_book.second_address, address_book.state_region,address_book.city,
                  address_book.postcode, address_book.lat_lon, address_book.about_info
                  FROM
                  profile
                  LEFT JOIN address_book ON address_book.profile_id_profile = profile.id_profile
                  LEFT JOIN chef ON chef.profile_id_profile = profile.id_profile
                  WHERE profile.user_id_user = ${id_user}`;
        return this.rs;
    }

    Delete(id_post) {
        this.rs = `DELETE FROM post WHERE id_post = ${id_post}`;
        return this.rs;
    }
}

const getPost = new Post();
module.exports = getPost;