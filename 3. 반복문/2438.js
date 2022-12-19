const input = require('fs').readFileSync(0).toString();

let n = Number(input);
let total = '';

for (let i = 1; i <= n; i++) {
    total += '*';
    console.log(total);
}