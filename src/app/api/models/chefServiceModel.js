class FoodService {

    constructor() {
        this.rs = '';
    }

    CreateService(service) {
        this.rs = `INSERT INTO chef_service_name (service_name, description, created, updated)
                   VALUES ('${service.name}', '${service.description}', now(), now())`;

        return this.rs;
    }

    CreateServiceAvailability(id_service) {
        this.rs = `INSERT INTO chef_service_availability (status, chef_service_name_id, created, updated)
                   VALUES ( 1 , '${id_service}', now(), now())`;

        return this.rs;
    }

    Update(id_service, service) {
        this.rs = `UPDATE chef_service_name SET service_name = '${service.name}', description = '${service.description}', updated = now()
                   WHERE id = '${id_service}'`;

        return this.rs;
    }

    Detail(id_service) {
        this.rs = `SELECT sn.id, sn.service_name, sn.description, sn.created, sn.updated, sa.status, sa.updated AS status_update
                   FROM chef_service_name as sn
                   INNER JOIN chef_service_availability as sa ON sa.chef_service_name_id = sn.id
                   WHERE sn.id = ${id_service}`;
        return this.rs;
    }

    getAllServices() {
        this.rs = `SELECT sn.id, sn.service_name, sn.description, sn.created, sn.updated, sa.status, sa.updated as status_update
                   FROM chef_service_name as sn
                   INNER JOIN chef_service_availability as sa ON sa.id = sn.id
                   WHERE sa.status = 1`;
        return this.rs;
    }

    // DeleteServiceAvailability(id_service) {
    //     this.rs = `DELETE FROM chef_service_availability WHERE id = ${id_service}`;
    //     return this.rs;
    // }

    // DeleteService(id_service) {
    //     this.rs = `DELETE FROM chef_service_name WHERE id = ${id_service}`;
    //     return this.rs;
    // }

    CheckService(id_service) {
        this.result = `SELECT * FROM chef_service_availability WHERE chef_service_name_id = ${id_service}`;
        return this.result;
    }

    changeStatusService(id_service, status) {
        this.result = `UPDATE chef_service_availability SET status = ${status} WHERE chef_service_name_id = ${id_service}`;
        return this.result;
    };
}

const getFoodService = new FoodService();
module.exports = getFoodService;