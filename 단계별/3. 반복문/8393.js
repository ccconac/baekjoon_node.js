const input = require('fs').readFileSync(0).toString();

let n = Number(input);
let sum = 0;

for (let i = 1; i <= n; i++) {
    sum += i;
}

console.log(sum);