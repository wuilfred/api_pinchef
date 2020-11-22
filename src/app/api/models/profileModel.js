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