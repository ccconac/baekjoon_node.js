const input = require('fs').readFileSync(0).toString().split(' ');

let first = Number(input[0].split('').reverse().join(''));
let second = Number(input[1].split('').reverse().join(''));

console.log(first > second ? first : second);

