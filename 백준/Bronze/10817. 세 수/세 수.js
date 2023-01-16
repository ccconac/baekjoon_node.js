const input = require('fs').readFileSync(0).toString().split(' ').map(Number).sort((a, b) => a - b);

console.log(input[1]);