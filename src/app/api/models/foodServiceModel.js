class FoodService {

    constructor() {
        this.rs = '';
    }

    Create(id_chef, foodService) {
        this.rs = `INSERT INTO food_service (service_type, description, day, hour, price, chef_id_chef, created, updated)
                   VALUES ('${foodService.service_type}', '${foodService.description}', '${foodService.day}', '${foodService.hour}',
                  '${foodService.price}', '${id_chef}', now(), now())`;

        return this.rs;
    }

    SavePicture(picture){
        this.rs = `UPDATE food_service SET picture = '${picture}'`;

        return this.rs;
    }

    Update(id_service, food_service) {
        this.rs = `UPDATE food_service SET service_type = '${food_service.service_type}', description = '${food_service.description}',
                   day = '${food_service.day}', hour = '${food_service.hour}', price = '${food_service.price}', picture = '${food_service.picture}',
                   chef_id_chef = '${food_service.id_chef}', updated = now()
                   WHERE id_food_service = '${id_service}'`;

        return this.rs;
    }

    Detail(id_service) {
        this.rs = `SELECT * FROM food_service WHERE id_food_service = '${id_service}'`;
        return this.rs;
    }

    getAll() {
        this.rs = `SELECT * FROM food_service`;
        return this.rs;
    }

    getAllServices(id_chef) {
        this.rs = `SELECT * FROM food_service WHERE chef_id_chef = ${id_chef}`;
        return this.rs;
    }

    Delete(id_service) {
        this.rs = `DELETE FROM food_service WHERE id_food_service = ${id_service}`;
        return this.rs;
    }
}

const getFoodService = new FoodService();
module.exports = getFoodService;