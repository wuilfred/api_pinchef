class FoodItem {

    constructor() {
        this.rs = '';
    }

    Create(chefPosition) {
        this.rs = `INSERT INTO chef_position (position, description, created, updated)
                   VALUES ('${chefPosition.position}', '${chefPosition.description}', now(), now())`;

        return this.rs;
    }

    Update(id_chefPosition, chefPosition) {
        this.rs = `UPDATE chef_position SET position = '${chefPosition.position}', description = '${chefPosition.description}',
                   updated = now()
                   WHERE id_chef_position = '${id_chefPosition}'`;

        return this.rs;
    }

    Detail(id_chefPosition) {
        this.rs = `SELECT * FROM chef_position WHERE id_chef_position = '${id_chefPosition}'`;
        return this.rs;
    }

    getAllPositions() {
        this.rs = `SELECT * FROM chef_position`;
        return this.rs;
    }

    Delete(id_chefPosition) {
        this.rs = `DELETE FROM chef_position WHERE id_chef_position = ${id_chefPosition}`;
        return this.rs;
    }
}

const getFoodItem = new FoodItem();
module.exports = getFoodItem;