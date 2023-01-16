const input = require('fs').readFileSync(0).toString().split('\n');

const N = Number(input[0].split(' ')[0]);
const k = Number(input[0].split(' ')[1]);
let x = [];

for (let i = 0; i < N; i++) {
    x.push(Number(input[1].split(' ')[i]));
}

x.sort((a, b) => b - a);

console.log(x[k - 1]);