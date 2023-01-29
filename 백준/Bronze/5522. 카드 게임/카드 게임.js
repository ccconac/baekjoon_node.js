const input = require('fs').readFileSync(0).toString().split('\n').map(Number);

let result = 0;

for (let i = 0; i < input.length; i++) {
    result += input[i];
}

console.log(result);