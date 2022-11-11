import {createUser} from './module/data.js';

const NUMBER_USERS = 25;
const arrId = Array.from({length: NUMBER_USERS}, createUser);

// eslint-disable-next-line no-console
console.log(arrId);

