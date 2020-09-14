const graphqlClient = require('./graphQLClient');
const { getTypesQuery } = require('./queries');

function getTypes() {
    return Promise.all(
        [
            'grocery',
            'makeup',
            'bags',
            'clothing',
            'furniture',
            'book',
            'medicine',
        ].map((type) => {
            return graphqlClient.request(getTypesQuery, { type });
        })
    );
}

function getCategories(types) {
    if ('categories' in types[0]) {
        return getCategories(types.map(({ categories }) => categories));
    }
    return types
        .flat(Infinity)
        .map(({ slug: category, type, children }) => {
            if (children && children.length) {
                return getCategories(children);
            }
            return { category, type };
        })
        .flat(Infinity);
}

module.exports = { getTypes, getCategories };
