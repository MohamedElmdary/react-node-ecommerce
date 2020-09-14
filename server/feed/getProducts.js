const { getProductsQuery } = require('./queries');
const graphqlClient = require('./graphQLClient');

function getProducts(type, category) {
    return graphqlClient.request(getProductsQuery, {
        type,
        category,
        offset: 0,
        limit: 20,
    });
}

module.exports = getProducts;
