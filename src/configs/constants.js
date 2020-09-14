const URL =
    process.env.NODE_ENV === 'development'
        ? 'http://localhost:8080/api'
        : '/api';

const CATEGORIES_URL = `${URL}/categories`;
const DRAWER_WIDTH = 260;

export { URL, CATEGORIES_URL, DRAWER_WIDTH };
