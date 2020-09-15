const URL =
    process.env.NODE_ENV === 'development'
        ? 'http://localhost:8080/api'
        : '/api';

const CATEGORIES_URL = `${URL}/categories`;
const PRODUCTS_URL = `${URL}/products`;
const DRAWER_WIDTH = 260;
const NAME_REGEX = /^[A-Za-z ]+$/;

// eslint-disable-next-line
const EMAIL_REGEX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export {
    URL,
    CATEGORIES_URL,
    DRAWER_WIDTH,
    PRODUCTS_URL,
    EMAIL_REGEX,
    NAME_REGEX,
};
