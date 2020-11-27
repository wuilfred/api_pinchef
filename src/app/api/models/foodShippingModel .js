class FoodItem {

    constructor() {
        this.rs = '';
    }

    Create(id_food_item, foodShipping) {
        this.rs = `INSERT INTO food_shipping (name, description, price, food_item_id_foot_item, created, updated)
                   VALUES ('${foodShipping.name}', '${foodShipping.description}', '${foodShipping.price}',
                   '${id_food_item}', now(), now())`;

        return this.rs;
    }

    Update(id_shipping, foodShipping) {
        this.rs = `UPDATE food_shipping SET name = '${foodShipping.name}', description = '${foodShipping.description}',
                   price = '${foodShipping.price}', updated = now()
                   WHERE id_shipping = '${id_shipping}'`;

        return this.rs;
    }

    Detail(id_shipping) {
        this.rs = `SELECT * FROM food_shipping WHERE id_shipping = '${id_shipping}'`;
        return this.rs;
    }

    getShippingByItem(id_food_item) {
        this.rs = `SELECT * FROM food_shipping WHERE food_item_id_foot_item = '${id_food_item}'`;
        return this.rs;
    }

    Delete(id_shipping) {
        this.rs = `DELETE FROM food_shipping WHERE id_shipping = ${id_shipping}`;
        return this.rs;
    }
}

const getFoodItem = new FoodItem();
module.exports = getFoodItem;