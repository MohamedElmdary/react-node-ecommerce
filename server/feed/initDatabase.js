const db = require('../configs/db');

function initDatabase() {
    // prettier-ignore
    return db
        .schema
        .createTable('Product', (table) => {
            table.integer('id');
            table.string('title');
            table.string('unit');
            table.double('price');
            table.double('salePrice');
            table.string('description');
            table.double('discountInPercent');
            table.string('image');
            table.string('gallery');
            table.string('category');
            table.string('type');
        })
        .createTable('Categories', (table) => {
            table.string('data');
        });
}

module.exports = initDatabase;
