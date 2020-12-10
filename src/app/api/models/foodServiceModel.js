class FoodService {

    constructor() {
        this.rs = '';
        this.tableLike = '`like`';
    }

    Create(id_chef, foodService) {
        this.rs = `INSERT INTO food_service (service_type, description, day, hour, price, chef_id_chef, created, updated)
                   VALUES ('${foodService.service_type}', '${foodService.description}', '${foodService.day}', '${foodService.hour}',
                  '${foodService.price}', '${id_chef}', now(), now())`;

        return this.rs;
    }

    SavePicture(id, picture) {
        this.rs = `UPDATE food_service SET picture = '${picture}' WHERE id_food_service = '${id}'`;

        return this.rs;
    }

    Update(id_service, food_service) {
        this.rs = `UPDATE food_service SET service_type = '${food_service.service_type}', description = '${food_service.description}',
                   day = '${food_service.day}', hour = '${food_service.hour}', price = '${food_service.price}', picture = '${food_service.picture}',
                   chef_id_chef = '${food_service.id_chef}', updated = now()
                   WHERE id_food_service = '${id_service}'`;

        return this.rs;
    }

    Detail(id_service) {
        this.rs = `SELECT fd.id_food_service, fd.service_type, fd.description, fd.day, fd.hour, fd.price, fd.picture,
                   fd.created, fd.updated, fd.chef_id_chef, chef.profile_id_profile AS id_profile, chef.position, chef_photo.photo_url AS chef_photo, profile.user_id_user AS id_user,
                   profile.name, profile.lastname,
                   (SELECT COUNT(*) FROM ${this.tableLike} WHERE ${this.tableLike}.id_food_service = fd.id_food_service AND ${this.tableLike}.status = 1)
                   AS likesQty,
                   (SELECT COUNT(*) FROM share WHERE share.id_food_service = fd.id_food_service)
                   AS shareQty,
                   (SELECT COUNT(*) FROM comment WHERE comment.id_food_service = fd.id_food_service)
                   AS commentQty
                   FROM food_service AS fd 
                   LEFT JOIN chef ON fd.chef_id_chef = chef.id_chef
                   LEFT JOIN chef_photo ON chef_photo.chef_id_chef = chef.id_chef
                   LEFT JOIN profile ON chef.profile_id_profile = profile.id_profile 
                   LEFT JOIN ${this.tableLike} ON fd.id_food_service = ${this.tableLike}.id_food_service
                   LEFT JOIN share ON fd.id_food_service = share.id_food_service
                   LEFT JOIN comment ON fd.id_food_service = comment.id_food_service
                   WHERE fd.id_food_service = '${id_service}'`;
        return this.rs;
    }

    getAll() {
        this.rs = `SELECT fd.id_food_service, fd.service_type, fd.description, fd.day, fd.hour, fd.price, fd.picture,
                    fd.created, fd.updated, fd.chef_id_chef, chef.profile_id_profile AS id_profile, chef.position, chef_photo.photo_url AS chef_photo, profile.user_id_user AS id_user,
                    profile.name, profile.lastname,
                    (SELECT COUNT(*) FROM ${this.tableLike} WHERE ${this.tableLike}.id_food_service = fd.id_food_service AND ${this.tableLike}.status = 1)
                    AS likesQty,
                    (SELECT COUNT(*) FROM share WHERE share.id_food_service = fd.id_food_service)
                    AS shareQty,
                    (SELECT COUNT(*) FROM comment WHERE comment.id_food_service = fd.id_food_service)
                    AS commentQty
                    FROM food_service AS fd 
                    LEFT JOIN chef ON fd.chef_id_chef = chef.id_chef
                    LEFT JOIN chef_photo ON chef_photo.chef_id_chef = chef.id_chef
                    LEFT JOIN profile ON chef.profile_id_profile = profile.id_profile 
                    LEFT JOIN ${this.tableLike} ON fd.id_food_service = ${this.tableLike}.id_food_service
                    LEFT JOIN share ON fd.id_food_service = share.id_food_service
                    LEFT JOIN comment ON fd.id_food_service = comment.id_food_service
                    ORDER BY fd.id_food_service DESC limit 500`;
        return this.rs;
    }

    getAllServices(id_chef) {
        this.rs = `SELECT fd.id_food_service, fd.service_type, fd.description, fd.day, fd.hour, fd.price, fd.picture,
                    fd.created, fd.updated, fd.chef_id_chef, chef.profile_id_profile AS id_profile, chef.position, chef_photo.photo_url AS chef_photo, profile.user_id_user AS id_user,
                    profile.name, profile.lastname,
                    (SELECT COUNT(*) FROM ${this.tableLike} WHERE ${this.tableLike}.id_food_service = fd.id_food_service AND ${this.tableLike}.status = 1)
                    AS likesQty,
                    (SELECT COUNT(*) FROM share WHERE share.id_food_service = fd.id_food_service)
                    AS shareQty,
                    (SELECT COUNT(*) FROM comment WHERE comment.id_food_service = fd.id_food_service)
                    AS commentQty
                    FROM food_service AS fd 
                    LEFT JOIN chef ON fd.chef_id_chef = chef.id_chef
                    LEFT JOIN chef_photo ON chef_photo.chef_id_chef = chef.id_chef
                    LEFT JOIN profile ON chef.profile_id_profile = profile.id_profile 
                    LEFT JOIN ${this.tableLike} ON fd.id_food_service = ${this.tableLike}.id_food_service
                    LEFT JOIN share ON fd.id_food_service = share.id_food_service
                    LEFT JOIN comment ON fd.id_food_service = comment.id_food_service
                    WHERE fd.chef_id_chef = ${id_chef}
                    ORDER BY fd.id_food_service DESC `;
        return this.rs;
    }

    Delete(id_service) {
        this.rs = `DELETE FROM food_service WHERE id_food_service = ${id_service}`;
        return this.rs;
    }
}

const getFoodService = new FoodService();
module.exports = getFoodService;