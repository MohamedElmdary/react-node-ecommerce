const URL =
    process.env.NODE_ENV === 'development'
        ? 'http://localhost:8080/api'
        : '/api';

const CATEGORIES_URL = `${URL}/categories`;
const PRODUCTS_URL = `${URL}/products`;
const DRAWER_WIDTH = 260;
const VIDEO_URL =
    'https://vod-progressive.akamaized.net/exp=1600188262~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F3015%2F17%2F440079017%2F1923238374.mp4~hmac=1cd43eb90fc3a57e9e5bfad00ff17fc53b332efc6b5e76b8c382c64e17b89ef1/vimeo-prod-skyfire-std-us/01/3015/17/440079017/1923238374.mp4?download=1&filename=production+ID%3A4912879.mp4';

export { URL, CATEGORIES_URL, DRAWER_WIDTH, PRODUCTS_URL, VIDEO_URL };
