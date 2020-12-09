class MasterClass {

    constructor() {
        this.rs = '';
        this.tableLike = '`like`';
    }

    Create(id_chef, master) {
        this.rs = `INSERT INTO master_class (title, cousine, dietary, description, ingredient_list, start_date, class_duration,
                   ticket_count, ticket_price, notified, chef_id_chef, created, updated)
                   VALUES ('${master.title}', '${master.cousine}', '${master.dietary}', '${master.description}',
                  '${master.ingredient_list}', '${master.start_date}','${master.class_duration}','${master.ticket_count}',
                  '${master.ticket_price}', '${master.notified}', '${id_chef}', now(), now())`;

        return this.rs;
    }

    Update(id_masterClass, master) {
        this.rs = `UPDATE master_class SET title = '${master.title}', cousine = '${master.cousine}', dietary = '${master.dietary}',
                   description = '${master.description}', ingredient_list = '${master.ingredient_list}', start_date = '${master.start_date}', 
                   class_duration = '${master.class_duration}', ticket_count = '${master.ticket_count}', ticket_price = '${master.ticket_price}',
                   notified = '${master.notified}', img = '${master.img}', updated = now()
                   WHERE id_master_class = '${id_masterClass}'`;

        return this.rs;
    }

    Detail(id_masterClass) {
        this.rs = `SELECT  mc.id_master_class, mc.title, mc.cousine, mc.dietary, mc.description, mc.ingredient_list, mc.start_date, mc.class_duration,
                   mc.ticket_count, mc.ticket_price, mc.notified, mc.img AS master_class_photo, mc.chef_id_chef AS id_chef, mc.created, mc.updated,
                   chef.profile_id_profile AS id_profile, chef.position, chef_photo.photo_url AS chef_photo, profile.user_id_user AS id_user,
                   profile.name, profile.lastname,
                   (SELECT COUNT(*) FROM ${this.tableLike} WHERE ${this.tableLike}.id_master_class = mc.id_master_class AND ${this.tableLike}.status = 1)
                   AS likesQty,
                   (SELECT COUNT(*) FROM share WHERE share.id_master_class = mc.id_master_class)
                   AS shareQty,
                   (SELECT COUNT(*) FROM comment WHERE comment.id_master_class = mc.id_master_class)
                   AS commentQty
                   FROM master_class AS mc
                   LEFT JOIN chef ON mc.chef_id_chef = chef.id_chef
                   LEFT JOIN chef_photo ON chef_photo.chef_id_chef = chef.id_chef
                   LEFT JOIN profile ON chef.profile_id_profile = profile.id_profile 
                   LEFT JOIN ${this.tableLike} ON mc.id_master_class = ${this.tableLike}.id_master_class
                   LEFT JOIN share ON mc.id_master_class = share.id_master_class
                   LEFT JOIN comment ON mc.id_master_class = comment.id_master_class
                   WHERE mc.id_master_class = '${id_masterClass}'`;
        return this.rs;
    }

    GetAll() {
        this.rs = `SELECT  mc.id_master_class, mc.title, mc.cousine, mc.dietary, mc.description, mc.ingredient_list, mc.start_date, mc.class_duration,
                   mc.ticket_count, mc.ticket_price, mc.notified, mc.img AS master_class_photo, mc.chef_id_chef AS id_chef, mc.created,  mc.updated,
                   chef.profile_id_profile AS id_profile, chef.position, chef_photo.photo_url AS chef_photo, profile.user_id_user  AS id_user,
                   profile.name, profile.lastname,
                   (SELECT COUNT(*) FROM ${this.tableLike} WHERE ${this.tableLike}.id_master_class = mc.id_master_class AND ${this.tableLike}.status = 1)
                   AS likesQty,
                   (SELECT COUNT(*) FROM share WHERE share.id_master_class = mc.id_master_class)
                   AS shareQty,
                   (SELECT COUNT(*) FROM comment WHERE comment.id_master_class = mc.id_master_class)
                   AS commentQty
                   FROM master_class AS mc
                   LEFT JOIN chef ON mc.chef_id_chef = chef.id_chef
                   LEFT JOIN chef_photo ON chef_photo.chef_id_chef = chef.id_chef
                   LEFT JOIN profile ON chef.profile_id_profile = profile.id_profile
                   LEFT JOIN ${this.tableLike} ON mc.id_master_class = ${this.tableLike}.id_master_class
                   LEFT JOIN share ON mc.id_master_class = share.id_master_class
                   LEFT JOIN comment ON mc.id_master_class = comment.id_master_class
                   ORDER BY updated DESC limit 500`;
        return this.rs;
    }

    GetAllForChef(id_chef) {
        this.rs = `SELECT  mc.id_master_class, mc.title, mc.cousine, mc.dietary, mc.description, mc.ingredient_list, mc.start_date, mc.class_duration,
                   mc.ticket_count, mc.ticket_price, mc.notified, mc.img AS mc_photo, mc.chef_id_chef AS id_chef, mc.created,  mc.updated,
                   chef.profile_id_profile AS id_profile, chef.position, chef_photo.photo_url AS chef_photo, profile.user_id_user AS id_user,
                   profile.name, profile.lastname,
                   (SELECT COUNT(*) FROM ${this.tableLike} WHERE ${this.tableLike}.id_master_class = mc.id_master_class AND ${this.tableLike}.status = 1)
                   AS likesQty,
                   (SELECT COUNT(*) FROM share WHERE share.id_master_class = mc.id_master_class)
                   AS shareQty,
                   (SELECT COUNT(*) FROM comment WHERE comment.id_master_class = mc.id_master_class)
                   AS commentQty
                   FROM master_class AS mc
                   LEFT JOIN chef ON mc.chef_id_chef = chef.id_chef
                   LEFT JOIN chef_photo ON chef_photo.chef_id_chef = chef.id_chef
                   LEFT JOIN profile ON chef.profile_id_profile = profile.id_profile 
                   LEFT JOIN ${this.tableLike} ON mc.id_master_class = ${this.tableLike}.id_master_class
                   LEFT JOIN share ON mc.id_master_class = share.id_master_class
                   LEFT JOIN comment ON mc.id_master_class = comment.id_master_class
                   WHERE mc.chef_id_chef = '${id_chef}'
                   ORDER BY created DESC`;
        return this.rs;
    }

    Delete(id_masterClass) {
        this.rs = `DELETE FROM master_class WHERE id_master_class = '${id_masterClass}'`;
        return this.rs;
    }

    SavePicture(id_master, picture) {
        this.rs = `UPDATE master_class SET img = '${picture}' WHERE id_master_class =  '${id_master}' `;

        return this.rs;
    }
}

const getMasterClase = new MasterClass();
module.exports = getMasterClase;