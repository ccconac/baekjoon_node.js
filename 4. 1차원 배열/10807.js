const input = require('fs').readFileSync(0).toString().split("\n");

let N = Number(input[0]);
let numbers = input[1].split(' ');
let v = input[2];
let count = 0;

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] === v) count += 1;
}

console.log(count);
