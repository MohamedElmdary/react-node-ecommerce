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

module.exports = router;
