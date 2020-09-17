const db = require('../configs/db');
const { getCategories } = require('./getCategories');
const { generateTypeCategory } = require('./generateTypeCategory');
const { getProductsData } = require('./getProductsData');
const { createFolder, GenerateJsonFile } = require('./GenerateJsonFile');
const generateTypeData = require('./GenerateTypeData');

async function generateJson() {
    console.log('Getting Categories');
    const categories = await getCategories();

    console.log('Generating type/category Data');
    const typeCategoryData = await generateTypeCategory(categories);

    console.log('Generating Data For Each Product');
    const productsData = await getProductsData();

    console.log('Generating data for each type');
    const typesData = await generateTypeData(Object.keys(categories));

    console.log('Generate Json Files');
    GenerateJsonFile(categories, 'categories.json');
    createFolder('type-category-products');
    typeCategoryData.forEach((item) => {
        if (!item || !item.length) {
            return;
        }
        const { type, category } = item[0];
        GenerateJsonFile(
            item,
            'type-category-products',
            `${type}-${category}.json`
        );
    });
    createFolder('products');
    productsData.forEach((product) => {
        const { id } = product;
        GenerateJsonFile(product, 'products', `${id}.json`);
    });
    createFolder('type-products');
    typesData.forEach((type) => {
        const [{ type: name }] = type;
        GenerateJsonFile(type, 'type-products', `${name}.json`);
    });

    await db.destroy();
}

generateJson();
