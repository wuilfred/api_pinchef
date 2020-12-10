class FoodItem {

    constructor() {
        this.rs = '';
        this.tableLike = '`like`';
    }

    Create(id_chef, foodItem) {
        this.rs = `INSERT INTO food_item (name, description, day, hour, price, chef_id_chef, created, updated)
                   VALUES ('${foodItem.name}', '${foodItem.description}', '${foodItem.day}', '${foodItem.hour}',
                  '${foodItem.price}', '${id_chef}', now(), now())`;

        return this.rs;
    }

    SavePicture(id, picture){
        this.rs = `UPDATE food_item SET picture = '${picture}' WHERE id_food_item = '${id}'`;

        return this.rs;
    }

    Update(idItem, foodItem) {
        this.rs = `UPDATE food_item SET name = '${foodItem.name}', description = '${foodItem.description}',
                   day = '${foodItem.day}', hour = '${foodItem.hour}', price = '${foodItem.price}', picture = '${foodItem.picture}',
                   chef_id_chef = '${foodItem.id_chef}', updated = now()
                   WHERE id_food_item = '${idItem}'`;

        return this.rs;
    }

    Detail(idItem) {
        this.rs = `SELECT fi.id_food_item, fi.name, fi.description, fi.day,  fi.hour, fi.price, fi.picture, fi.created, fi.updated,
                   fi.chef_id_chef, chef.profile_id_profile AS id_profile, chef.position, chef_photo.photo_url AS chef_photo,
                   profile.user_id_user AS id_user, profile.name AS profile_name, profile.lastname AS profile_lastname,
                   (SELECT COUNT(*) FROM ${this.tableLike} WHERE ${this.tableLike}.id_food_item = fi.id_food_item AND ${this.tableLike}.status = 1)
                   AS likesQty,
                   (SELECT COUNT(*) FROM share WHERE share.id_food_item = fi.id_food_item)
                   AS shareQty,
                   (SELECT COUNT(*) FROM comment WHERE comment.id_food_item = fi.id_food_item)
                   AS commentQty
                   FROM food_item as fi
                   LEFT JOIN chef ON fi.chef_id_chef = chef.id_chef
                   LEFT JOIN chef_photo ON chef_photo.chef_id_chef = chef.id_chef
                   LEFT JOIN profile ON chef.profile_id_profile = profile.id_profile 
                   LEFT JOIN ${this.tableLike} ON fi.id_food_item = ${this.tableLike}.id_food_item
                   LEFT JOIN share ON fi.id_food_item = share.id_food_item
                   LEFT JOIN comment ON fi.id_food_item = comment.id_food_item
                   WHERE fi.id_food_item = '${idItem}'`;
        return this.rs;
    }

    getItemsByChef(id_chef) {
        this.rs = `SELECT fi.id_food_item, fi.name, fi.description, fi.day,  fi.hour, fi.price, fi.picture, fi.created, fi.updated,
                    fi.chef_id_chef, chef.profile_id_profile AS id_profile, chef.position, chef_photo.photo_url AS chef_photo,
                    profile.user_id_user AS id_user, profile.name AS profile_name, profile.lastname AS profile_lastname,
                    (SELECT COUNT(*) FROM ${this.tableLike} WHERE ${this.tableLike}.id_food_item = fi.id_food_item AND ${this.tableLike}.status = 1)
                    AS likesQty,
                    (SELECT COUNT(*) FROM share WHERE share.id_food_item = fi.id_food_item)
                    AS shareQty,
                    (SELECT COUNT(*) FROM comment WHERE comment.id_food_item = fi.id_food_item)
                    AS commentQty
                    FROM food_item as fi
                    LEFT JOIN chef ON fi.chef_id_chef = chef.id_chef
                    LEFT JOIN chef_photo ON chef_photo.chef_id_chef = chef.id_chef
                    LEFT JOIN profile ON chef.profile_id_profile = profile.id_profile 
                    LEFT JOIN ${this.tableLike} ON fi.id_food_item = ${this.tableLike}.id_food_item
                    LEFT JOIN share ON fi.id_food_item = share.id_food_item
                    LEFT JOIN comment ON fi.id_food_item = comment.id_food_item
                    WHERE fi.chef_id_chef = '${id_chef}'
                    ORDER BY fi.updated DESC`;
        return this.rs;
    }

    getAllItems() {
        this.rs = `SELECT fi.id_food_item, fi.name, fi.description, fi.day,  fi.hour, fi.price, fi.picture, fi.created, fi.updated,
                    fi.chef_id_chef, chef.profile_id_profile AS id_profile, chef.position, chef_photo.photo_url AS chef_photo,
                    profile.user_id_user AS id_user, profile.name AS profile_name, profile.lastname AS profile_lastname,
                    (SELECT COUNT(*) FROM ${this.tableLike} WHERE ${this.tableLike}.id_food_item = fi.id_food_item AND ${this.tableLike}.status = 1)
                    AS likesQty,
                    (SELECT COUNT(*) FROM share WHERE share.id_food_item = fi.id_food_item)
                    AS shareQty,
                    (SELECT COUNT(*) FROM comment WHERE comment.id_food_item = fi.id_food_item)
                    AS commentQty
                    FROM food_item as fi
                    LEFT JOIN chef ON fi.chef_id_chef = chef.id_chef
                    LEFT JOIN chef_photo ON chef_photo.chef_id_chef = chef.id_chef
                    LEFT JOIN profile ON chef.profile_id_profile = profile.id_profile 
                    LEFT JOIN ${this.tableLike} ON fi.id_food_item = ${this.tableLike}.id_food_item
                    LEFT JOIN share ON fi.id_food_item = share.id_food_item
                    LEFT JOIN comment ON fi.id_food_item = comment.id_food_item
                    ORDER BY fi.updated DESC limit 500`;
        return this.rs;
    }

    Delete(id_item) {
        this.rs = `DELETE FROM food_item WHERE id_food_item = ${id_item}`;
        return this.rs;
    }
}

const getFoodItem = new FoodItem();
module.exports = getFoodItem;