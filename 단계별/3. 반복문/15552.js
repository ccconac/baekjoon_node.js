let input = require('fs').readFileSync(0).toString().split('\n');

let T = Number(input[0]);
let sum = '';

for (let i = 1; i <= T; i++) {
    let number = input[i].split(' ').map(Number);
    sum += number[0] + number[1] + '\n';
}

console.log(sum);