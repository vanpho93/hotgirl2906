const queryDB = require('./db');

class HotGirl {
    static async getHotGirlById(id) {
        const sql = 'SELECT * FROM "HotGirl" WHERE id = $1';
        const result = await queryDB(sql, [id]);
        if (!result.rows[0]) throw new Error('Hotgirl ko ton tai.');
        return result.rows[0];
    }

    static async likeGirlById(id) {
        const sql = 'UPDATE "HotGirl" SET "likeNumber" = "likeNumber" + 1 WHERE id = $1  RETURNING "likeNumber"';
        const result = await queryDB(sql, [id]);
        if (result.rowCount === 0) throw new Error('Hotgirl ko ton tai.');
        return result.rows[0].likeNumber;
    }

    static async dislikeGirlById(id) {
        const sql = 'UPDATE "HotGirl" SET "dislikeNumber" = "dislikeNumber" + 1 WHERE id = $1';
        const result = await queryDB(sql, [id]);
        if (result.rowCount === 0) throw new Error('Hotgirl ko ton tai.');
        return;
    }
}

module.exports = HotGirl;

// HotGirl.likeGirlById(1)
// .then(result => console.log(result));
