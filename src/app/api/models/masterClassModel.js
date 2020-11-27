class MasterClass {

    constructor() {
        this.rs = '';
    }

    Create(id_chef, master) {
        this.rs = `INSERT INTO master_class (title, cousine, dietary, description, ingredient_list, start_date, class_duration,
                   ticket_count, ticket_price, notified, chef_id_chef)
                   VALUES ('${master.title}', '${master.cousine}', '${master.dietary}', '${master.description}',
                  '${master.ingredient_list}', '${master.start_date}','${master.class_duration}','${master.ticket_count}',
                  '${master.ticket_price}', '${master.notified}', '${id_chef}')`;

        return this.rs;
    }

    Update(id_masterClass, master) {
        this.rs = `UPDATE master_class SET title = '${master.title}', cousine = '${master.cousine}', dietary = '${master.dietary}',
                   description = '${master.description}', ingredient_list = '${master.ingredient_list}', start_date = '${master.start_date}', 
                   class_duration = '${master.class_duration}', ticket_count = '${master.ticket_count}', ticket_price = '${master.ticket_price}',
                   notified = '${master.notified}'
                   WHERE id_master_class = '${id_masterClass}'`;

        return this.rs;
    }

    Detail(id_masterClass) {
        this.rs = `SELECT * FROM master_class WHERE id_master_class = '${id_masterClass}'`;
        return this.rs;
    }

    GetAll(id_chef) {
        this.rs = `SELECT * FROM master_class WHERE chef_id_chef = '${id_chef}'`;
        return this.rs;
    }

    Delete(id_masterClass) {
        this.rs = `DELETE FROM master_class WHERE id_master_class = '${id_masterClass}'`;
        return this.rs;
    }
}

const getMasterClase = new MasterClass();
module.exports = getMasterClase;