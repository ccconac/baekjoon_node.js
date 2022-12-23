let input = require('fs').readFileSync(0).toString().split('\n').map(Number);

let num = [];

for (let i = 0; i < 10; i++) {
    if (num.indexOf(input[i] % 42) === -1) {
        num.push(input[i] % 42);
    }
}

console.log(num.length);