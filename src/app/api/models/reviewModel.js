class Reviews {

    constructor() {
        this.rs = '';
    }

    Create(id_chef, reviews) {
        this.rs = `INSERT INTO chef_reviews (name, description, raiting, followers, share, likes, chef_id_chef, created, updated)
                   VALUES ('${reviews.name}', '${reviews.description}', '${reviews.raiting}', '${reviews.followers}',
                  '${reviews.share}', '${reviews.likes}', '${id_chef}', now(), now())`;

        return this.rs;
    }

    Update(id_chef, reviews) {
        this.rs = `UPDATE chef_reviews SET name = '${reviews.name}', description = '${reviews.description}',
                   raiting = '${reviews.raiting}', followers = '${reviews.followers}', share = '${reviews.share}',
                   likes = '${reviews.likes}', updated = now()
                   WHERE chef_id_chef = '${id_chef}'`;

        return this.rs;
    }

    Detail(id_chef) {
        this.rs = `SELECT * FROM chef_reviews WHERE chef_id_chef = '${id_chef}'`;
        return this.rs;
    }

    CheckReviewExist(id_chef) {
        this.rs = `SELECT count(*) AS reviewExist FROM chef_reviews WHERE chef_id_chef = ${id_chef}`;
        return this.rs;
    }

    Delete(id_chef) {
        this.rs = `DELETE FROM chef_reviews WHERE chef_id_chef = '${id_chef}'`;
        return this.rs;
    }
}

const getReviws = new Reviews();
module.exports = getReviws;