
class FoodST {

    construct() {
        this.rs = '';
    }

    Create(food_st) {
        this.rs = `INSERT INTO food_st (service_type, description, created, updated)
        VALUES ('${food_st.service_type}', '${food_st.description}', now(), now());
        SELECT LAST_INSERT_ID() AS foodSTId`;
        return this.rs;
    }

    Detail(id_food_st) {
        this.rs = `SELECT * FROM food_st WHERE id_food_st = '${id_food_st}'`;
        return this.rs;
    }

    Update(id_food_st, food_st) {
        this.rs = `UPDATE food_st SET service_type ='${food_st.service_type}', description = '${food_st.description}', updated=now() WHERE id_food_st = '${id_food_st}';
        SELECT * FROM food_st WHERE id_food_st = '${id_food_st}'`;
        return this.rs;
    }

    Delete(id_food_st) {
        this.rs = `DELETE FROM food_st WHERE id_food_st = '${id_food_st}'`;
        return this.rs;
    }

    GetAll() {
        this.rs = `SELECT * from food_st`;
        return this.rs;
    }
    

}
let getfoodST= new FoodST();
module.exports = getfoodST;