const express = require('express');
const router = express.Router();
const db = require('../configs/db');

router.get('/', async (_, res) => {
    const [first] = await db('Categories').select('*');
    const { data } = first;
    const result = JSON.parse(data);
    res.json(result);
});

module.exports = router;
