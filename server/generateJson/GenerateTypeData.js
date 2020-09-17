const db = require('../configs/db');

function _generateTypeData(types) {
    return Promise.all(
        types.map((type) => {
            const where = db.raw('type = :type', { type });
            return db('Product').select('*').where(where);
        })
    );
}

async function generateTypeData(types) {
    const data = await _generateTypeData(types);
    return data.map((items) => {
        return items.map((item) => {
            return {
                ...item,
                gallery: JSON.parse(item.gallery),
            };
        });
    });
}

module.exports = generateTypeData;
