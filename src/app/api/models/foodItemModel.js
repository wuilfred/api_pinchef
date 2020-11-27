class FoodItem {

    constructor() {
        this.rs = '';
    }

    Create(id_chef, foodItem) {
        this.rs = `INSERT INTO food_item (name, description, day, hour, price, picture, chef_id_chef, created, updated)
                   VALUES ('${foodItem.name}', '${foodItem.description}', '${foodItem.day}', '${foodItem.hour}',
                  '${foodItem.price}', '${foodItem.picture}', '${id_chef}', now(), now())`;

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
        this.rs = `SELECT * FROM food_item WHERE id_food_item = '${idItem}'`;
        return this.rs;
    }

    getItemsByChef(id_chef) {
        this.rs = `SELECT * FROM food_item WHERE chef_id_chef = '${id_chef}'`;
        return this.rs;
    }

    Delete(id_item) {
        this.rs = `DELETE FROM food_item WHERE id_food_item = ${id_item}`;
        return this.rs;
    }
}

const getFoodItem = new FoodItem();
module.exports = getFoodItem;