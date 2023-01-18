const numbers = require('fs').readFileSync(0).toString().split(' ').map(Number);

let sqrt = 0;

for (let i = 0; i < numbers.length; i++) {
    sqrt += numbers[i] ** 2;
}

let ver = sqrt % 10;

console.log(ver);