const input = require('fs').readFileSync(0).toString().trim().split('\n').map(Number);

let sum = 0;

for (let i = 0; i < input.length; i++) {
    if (input[i] < 40) input[i] = 40;
    sum += input[i];
}

let avg = sum / input.length;

console.log(avg);