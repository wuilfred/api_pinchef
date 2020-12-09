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

    CreateAddress(address, id_profile, id_user) {
        this.rs = `INSERT INTO address_book (country, first_address, second_address, state_region, city, postcode, lat_lon,
                  about_info, profile_id_profile, user_id_user, created, updated)
                  VALUES ('${address.country}', '${address.first_address}', '${address.second_address}', '${address.state_region}',
                 '${address.city}', '${address.postcode}',' ${address.lat_lon}', '${address.about_info}', '${id_profile}',
                 '${id_user}', now(), now())`;

        return this.rs;
    }

    CreateChef(chef, id_profile) {
        this.rs = `INSERT INTO chef (short_intro, long_intro, services_name, service_availability, price, position, languages,
                  address, location_service, banner, profile_id_profile)
                  VALUES ('${chef.short_intro}', '${chef.long_intro}', '${chef.services_name}', '${chef.service_availability}',
                 '${chef.price}', '${chef.position}',' ${chef.languages}', '${chef.address}', '${chef.location_service}',
                 '${chef.banner}', '${id_profile}')`;

        return this.rs;
    }

    UpdateAddress(id_profile, address) {
        this.rs = `UPDATE address_book SET country = '${address.country}', first_address = '${address.first_address}',
                  second_address = '${address.second_address}', state_region = '${address.state_region}', city = '${address.city}',
                  postcode = '${address.postcode}', lat_lon = '${address.lat_lon}', about_info = '${address.about_info}', updated = now()
                  WHERE profile_id_profile = ${id_profile}`;

        return this.rs;
    }

    UpdateChef(id_profile, chef) {
        this.rs = `UPDATE chef SET short_intro = '${chef.short_intro}', long_intro = '${chef.long_intro}',
                  services_name = '${chef.services_name}', service_availability = '${chef.service_availabilityv}',
                  price = '${chef.price}', position = '${chef.position}', languages = '${chef.languages}',
                  address = '${chef.address}', location_service = '${chef.location_service}', banner = '${chef.banner}'
                  WHERE profile_id_profile = ${id_profile}`;

        return this.rs;
    }

    Detail(id_user) {
        this.rs = `SELECT profile.id_profile, profile.name, profile.lastname, profile.birthday, profile.gender, profile.phone,
                  profile.status, profile.photo, profile.address AS profile_address, profile.role, profile.user_id_user,
                  chef.id_chef, chef.short_intro, chef.long_intro, chef.services_name, chef.service_availability, chef.price, chef.position,
                  chef.languages, chef.address AS chef_address, chef.location_service, chef.banner, address_book.id_address,
                  address_book.country, address_book.first_address,  address_book.second_address, address_book.state_region,address_book.city,
                  address_book.postcode, address_book.lat_lon, address_book.about_info
                  FROM
                  profile
                  LEFT JOIN address_book ON address_book.profile_id_profile = profile.id_profile
                  LEFT JOIN chef ON chef.profile_id_profile = profile.id_profile
                  WHERE profile.user_id_user = ${id_user}`;
        return this.rs;
    }

    CheckProfileExist(id_user) {
        this.rs = `SELECT count(*) AS userExist FROM profile WHERE user_id_user = ${id_user}`;
        return this.rs;
    }

    Update(id_profile, profile) {
        this.rs = `UPDATE profile SET name = '${profile.name}', lastname = '${profile.lastname}', birthday = '${profile.birthday}',
                  gender = '${profile.gender}', phone = '${profile.phone}', status = '${profile.status}', photo = '${profile.photo}',
                  address = '${profile.address}', role = '${profile.role}'
                  WHERE id_profile = ${id_profile}`;

        return this.rs;
    }

    Delete(id_user) {
        this.rs = `DELETE FROM profile WHERE user_id_user = ${id_user}`;
        return this.rs;
    }

    SavePictureProfile(id_profile, picture) {
        this.rs = `UPDATE profile SET photo = '${picture}' WHERE id_profile = '${id_profile}'`;
        return this.rs;
    }

    SavePictureChef(id_chef, description, photo_url, photo_name) {
        this.rs = `INSERT INTO chef_photo (name, description, photo_url, chef_id_chef, created, updated)
                   VALUES ('${photo_name}', '${description}',  '${photo_url}', '${id_chef}', now(), now())`;
        return this.rs;
    }
}

const getProfile = new Profile();
module.exports = getProfile;