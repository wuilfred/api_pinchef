
class Cousine {

    construct() {
        this.rs = '';
    }

    Create(cousine) {
        this.rs = `INSERT INTO cousine (cousine, description, created, updated)
        VALUES ('${cousine.cousine}', '${cousine.description}', now(), now());
        SELECT LAST_INSERT_ID() AS cousineId`;
        return this.rs;
    }

    Detail(id_cousine) {
        this.rs = `SELECT * FROM cousine WHERE id_cousine = '${id_cousine}'`;
        return this.rs;
    }

    Update(id_cousine, cousine) {
        this.rs = `UPDATE cousine SET cousine ='${cousine.cousine}', description = '${cousine.description}', updated=now() WHERE id_cousine = '${id_cousine}';
        SELECT * FROM cousine WHERE id_cousine = '${id_cousine}'`;
        return this.rs;
    }

    Delete(id_cousine) {
        this.rs = `DELETE FROM cousine WHERE id_cousine = '${id_cousine}'`;
        return this.rs;
    }
    

}
let getCousine= new Cousine();
module.exports = getCousine;