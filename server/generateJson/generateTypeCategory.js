const db = require('../configs/db');

function formatGenerateTypeCategory(categories) {
    const types = Object.keys(categories);
    return types.reduce((result, type) => {
        const items = categories[type];
        for (const item of items) {
            const children = item.children;
            if (Array.isArray(children)) {
                for (const child of children) {
                    result.push([type, child.slug]);
                }
            } else {
                result.push([type, item.slug]);
            }
        }
        return result;
    }, []);
}

function _generateTypeCategory(categories) {
    return Promise.all(
        categories.map(([type, category]) => {
            const where = db.raw('type = :type and category = :category', {
                type,
                category,
            });
            return db('Product').select('*').where(where);
        })
    );
}

function getTypeCategoriesData(data) {
    return data.map((items) => {
        return items.map((item) => {
            return {
                ...item,
                gallery: JSON.parse(item.gallery),
            };
        });
    });
}

async function generateTypeCategory(categories) {
    const typeCategoryData = formatGenerateTypeCategory(categories);
    const typeCategories = await _generateTypeCategory(typeCategoryData);
    const typeCategoriesData = getTypeCategoriesData(typeCategories);
    return typeCategoriesData;
}

module.exports = {
    formatGenerateTypeCategory,
    _generateTypeCategory,
    getTypeCategoriesData,
    generateTypeCategory,
};
