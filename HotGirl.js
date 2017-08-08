const queryDB = require('./db');

class HotGirl {
    static async getHotGirlById(id) {
        const sql = 'SELECT * FROM "HotGirl" WHERE id = $1';
        const result = await queryDB(sql, [id]);
        if (!result.rows[0]) throw new Error('Hotgirl ko ton tai.');
        return result.rows[0];
    }
}

module.exports = HotGirl;
