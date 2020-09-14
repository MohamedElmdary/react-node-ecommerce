const { join } = require('path');

const db = require('knex')({
    client: 'sqlite3',
    connection: {
        filename: join(__dirname, '..', 'data.db'),
    },
    useNullAsDefault: true,
});

module.exports = db;
