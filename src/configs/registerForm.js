import { NAME_REGEX, EMAIL_REGEX } from './constants';

const registerForm = {
    username: [
        'username',
        (state) => {
            const s = state.trim();
            return NAME_REGEX.test(s) && s.length > 1 && s.length < 20;
        },
        'Username is requried & min length is 2 chars & max is 20.',
    ],
    email: [
        'email',
        (state) => {
            return EMAIL_REGEX.test(state);
        },
        'Invalid email format.',
    ],
    phone: [
        'phone',
        (state) => {
            return /^\d{11}$/.test(state);
        },
        'Phone must be a number of 11 digit.',
    ],
    password: [
        'password',
        (state) => {
            const pass = state.trim();
            return pass.length > 6;
        },
        'Password min length is 6.',
    ],
};

export default registerForm;
