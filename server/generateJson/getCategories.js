const db = require('../configs/db');

function _getCategories() {
    return db('Categories').select('*');
}

function formatCategories([{ data }]) {
    return JSON.parse(data);
}

async function getCategories() {
    const data = await _getCategories();
    return formatCategories(data);
}

module.exports = {
    getCategories,
    formatCategories,
    _getCategories,
};
