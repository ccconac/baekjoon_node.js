const input = require('fs').readFileSync(0).toString();

let n = Number(input);
let total = '';

for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - i - 1; j++) {
        total += ' ';
    }
    for (let k = 0; k <= i; k++) {
        total += '*';
    }
    total += '\n';
}

console.log(total);