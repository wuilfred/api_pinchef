class StatusOrder {

    construct() {
        this.rs = '';
    }

    Create(id_cart_order, status_order) {
        this.rs = `INSERT INTO status_order (name, description, type_payment, status, comment, cart_order_id_cart_order, created, updated)
                   VALUES ('${status_order.name}', '${status_order.description}', '${status_order.type_payment}','${status_order.status}',
                   '${status_order.comment}', '${id_cart_order}', now(), now())`;

        return this.rs;
    }

    Detail(id_status_order) {
        this.rs = `SELECT * FROM status_order WHERE id_status_order = '${id_status_order}'`;

        return this.rs;
    }

    Update(id_status_order, status_order) {
        this.rs = `UPDATE status_order SET name = '${status_order.name}', description =  '${status_order.description}',
                   type_payment =  '${status_order.type_payment}', status =  '${status_order.status}', 
                   comment =  '${status_order.status}', cart_order_id_cart_order =  '${status_order.id_cart_order}',
                   updated = now()   
                   WHERE id_status_order = '${id_status_order}'`;

        return this.rs;
    }

    Delete(id_status_order) {
        this.rs = `DELETE FROM status_order WHERE id_status_order = '${id_status_order}'`;
        return this.rs;
    }



}
let getStatusOrder = new StatusOrder();
module.exports = getStatusOrder;