const express = require('express');
const bodyParser = require('body-parser');
const compression = require('compression');
const helmet = require('helmet');
const cors = require('cors');
const app = express();
const { join } = require('path');

// prettier-ignore
app
    .use(express.static(join(__dirname, '..', 'build')))
    .use(bodyParser.json())
    .use(bodyParser.urlencoded({extended: true}))
    .use(helmet({
        contentSecurityPolicy: false
    }))
    .use(compression());

// delay for demo
if (!process.env.PORT) {
    // prettier-ignore
    app
    .use(cors())
    .use((_, __, next) => {
        setTimeout(() => {
            next();
        }, 500);
    });
}

/* routes */
app.use('/api/products', require('./routes/products'));
app.use('/api/categories', require('./routes/categories'));

app.get('*', (_, res) => {
    res.sendFile(join(__dirname, '..', 'build', 'index.html'));
});

const port = process.env.PORT || 8080;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
