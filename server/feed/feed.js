const initDatabase = require('./initDatabase');
const { getTypes, getCategories } = require('./getTypes');
// const feedDatabase = require('./feedDatabase');

async function feed() {
    // await initDatabase();
    const types = await getTypes();
    const categories = getCategories(types);
    console.log(categories);
}

feed();
