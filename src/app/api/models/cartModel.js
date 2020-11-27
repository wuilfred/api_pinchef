var validator = require('validator');

class Cart {

    construct() {
        this.rs = '';
    }

    Create(cart_order) {
        this.rs = `INSERT INTO cart_order (name, description, price, quantity, tax, shipping, total, type_payment)
        VALUES ('${cart_order.name}', '${cart_order.description}', '${cart_order.price}','${cart_order.quantity}', '${cart_order.tax}', '${cart_order.shipping}', '${cart_order.total}', '${cart_order.type_payment}');
        SELECT LAST_INSERT_ID() AS cart_orderId`;

        return this.rs;
    }
    

}
let getCart= new Cart();
module.exports = getCart;