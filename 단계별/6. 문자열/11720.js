const input = require('fs').readFileSync(0).toString().split('\n');

let N = Number(input[0]);
let num = input[1];
let sum = 0;

for (let i = 0; i < num.length; i++) {
    sum += Number(num[i]);
}

console.log(sum);