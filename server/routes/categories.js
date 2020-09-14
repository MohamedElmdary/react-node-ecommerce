const express = require('express');
const router = express.Router();
const { getTypes } = require('../feed/getTypes');

router.get('/', async (_, res) => {
    const types = await getTypes();
    res.json(
        types
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
            }, {})
    );
});

module.exports = router;
