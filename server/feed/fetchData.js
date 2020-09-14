const getProducts = require('./getProducts');

function fetchData(categories) {
    return Promise.all(
        categories.map(({ category, type }) => {
            return getProducts(type, category);
        })
    );
}

module.exports = fetchData;
