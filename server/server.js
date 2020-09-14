const express = require('express');
const bodyParser = require('body-parser');
const compression = require('compression');
const helmet = require('helmet');
const cors = require('cors');
const app = express();

// prettier-ignore
app
    .use(cors())
    .use(bodyParser.json())
    .use(bodyParser.urlencoded({extended: true}))
    .use(helmet())
    .use(compression());

// delay for demo
app.use((req, res, next) => {
    setTimeout(() => {
        next();
    }, 1000);
});

/* routes */
app.use('/api/products', require('./routes/products'));
app.use('/api/categories', require('./routes/categories'));

const port = process.env.PORT || 8080;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
