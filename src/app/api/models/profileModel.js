class Profile {

    constructor() {
        this.rs = '';
    }

    Create(id_user, profile) {
        this.rs = `INSERT INTO profile (name, lastname, birthday, gender, phone, status, photo, address, role, user_id_user)
                  VALUES ('${profile.name}', '${profile.lastname}', '${profile.birthday}', '${profile.gender}', '${profile.phone}',
                  1,' ${profile.photo}', '${profile.address}', '${profile.role}', '${id_user}' )`;

        return this.rs;
    }

    CreateAddress(address) {
        this.rs = `INSERT INTO address_book (country, first_address, second_address, state_region, city, postcode, lat_lon,
                  about_info, profile_id_profile, user_id_user, created, updated)
                  VALUES ('${address.country}', '${address.first_address}', '${address.second_address}', '${address.state_region}',
                 '${address.city}', '${address.postcode}',' ${address.lat_lon}', '${address.about_info}', '${address.profile_id_profile}',
                 '${address.user_id_user}', now(), now())`;

        return this.rs;
    }

    CreateChef(chef) {
        this.rs = `INSERT INTO chef (short_intro, long_intro, services_name, service_availability, price, position, languages,
                  address, location_service, banner, profile_id_profile)
                  VALUES ('${chef.short_intro}', '${chef.long_intro}', '${chef.services_name}', '${chef.service_availability}',
                 '${chef.price}', '${chef.position}',' ${chef.languages}', '${chef.address}', '${chef.location_service}',
                 '${chef.banner}', '${chef.profile_id_profile}')`;

        return this.rs;
    }

    Detail(id_user) {
        this.rs = `SELECT * FROM profile WHERE user_id_user = ${id_user}`;
        return this.rs;
    }

    Update(id_user, profile) {
        this.rs = `UPDATE profile SET name = '${profile.name}', lastname = '${profile.lastname}', birthday = '${profile.birthday}',
                  gender = '${profile.gender}', phone = '${profile.phone}', status = '${profile.status}', photo = '${profile.photo}',
                  address = '${profile.address}', role = '${profile.role}'
                  WHERE user_id_user = ${id_user}`;

        return this.rs;
    }

    Delete(id_user) {
        this.rs = `DELETE FROM profile WHERE user_id_user = ${id_user}`;
        return this.rs;
    }
}

const getProfile = new Profile();
module.exports = getProfile;