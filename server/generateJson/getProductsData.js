const db = require('../configs/db');

function _getProductsData() {
    return db('Product').select('*');
}

async function getProductsData() {
    const data = await _getProductsData();
    return data.map((item) => {
        return {
            ...item,
            gallery: JSON.parse(item.gallery),
        };
    });
}

module.exports = {
    getProductsData,
    _getProductsData,
};
