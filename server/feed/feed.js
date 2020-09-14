const initDatabase = require('./initDatabase');
const { getTypes, getCategories } = require('./getTypes');
const feedDatabase = require('./feedDatabase');
const fetchData = require('./fetchData');
const db = require('../configs/db');

async function feed() {
    try {
        console.log('Initializing Database');
        await initDatabase();

        console.log('Getting Types');
        const types = await getTypes();
        const categories = getCategories(types);

        console.log('Fetching Data');
        const data = await fetchData(categories);

        console.log('Feeding Database');
        await feedDatabase(categories, data);

        await db.destroy();
    } catch (err) {
        console.error('You might have run this file before!');
        throw err;
    }
}

feed();
