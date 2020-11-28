
class Dietary {

    construct() {
        this.rs = '';
    }

    Create(dietary) {
        this.rs = `INSERT INTO dietary (dietary, description, created, updated)
        VALUES ('${dietary.dietary}', '${dietary.description}', now(), now());
        SELECT LAST_INSERT_ID() AS dietaryId`;
        return this.rs;
    }

    Detail(id_dietary) {
        this.rs = `SELECT * FROM dietary WHERE id_dietary = '${id_dietary}'`;
        return this.rs;
    }

    Update(id_dietary, dietary) {
        this.rs = `UPDATE dietary SET dietary ='${dietary.dietary}', description = '${dietary.description}', updated=now() WHERE id_dietary = '${id_dietary}';
        SELECT * FROM dietary WHERE id_dietary = '${id_dietary}'`;
        return this.rs;
    }

    Delete(id_dietary) {
        this.rs = `DELETE FROM dietary WHERE id_dietary = '${id_dietary}'`;
        return this.rs;
    }
    

}
let getDietary= new Dietary();
module.exports = getDietary;