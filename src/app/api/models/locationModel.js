class Location {

    constructor() {
        this.rs = '';
    }
    getAllCountry() {
        this.rs = `SELECT * FROM country`;
        return this.rs;
    };

    getAllCityForCountry(iso) {
        this.rs = `SELECT * FROM city WHERE country_iso = '${iso}'`;
        return this.rs;
    };
}

const getLocation = new Location();
module.exports = getLocation;