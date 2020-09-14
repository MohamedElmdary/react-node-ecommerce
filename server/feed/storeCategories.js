const db = require('../configs/db');

function storeCategories(types) {
    const data = types
        .map(({ categories }) => categories)
        .reduce((result, current) => {
            result[current[0].type] = current.map((item) => {
                const { title, slug, children = [] } = item;
                return {
                    title,
                    slug,
                    children: children.map((child) => {
                        const { title, slug } = child;
                        return { title, slug };
                    }),
                };
            });
            return result;
        }, {});

    return db('Categories').insert({ data: JSON.stringify(data) });
}

module.exports = storeCategories;
