import { esOne } from './es';

require('./style/style.css');

const { commonOne } = require('./common');

console.log(commonOne(1, 5));
console.log(esOne(1, 6));
