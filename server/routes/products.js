const express = require('express');
const router = express.Router();
const db = require('../configs/db');

router.get('/:type/:category', async (req, res) => {
    const where = db.raw('type = :type and category = :category', req.params);

    // prettier-ignore
    const data = await db('Product')
        .select('*')
        .where(where);

    res.json(data);
});

router.get('/:type/:category/:id', async (req, res) => {
    const where = db.raw(
        'type = :type and category = :category and id = :id',
        req.params
    );

    // prettier-ignore
    const data = await db('Product')
        .select('*')
        .where(where);

    if (data[0]) {
        data[0].gallery = JSON.parse(data[0].gallery);
    }

    res.json(data[0]);
});

module.exports = router;
