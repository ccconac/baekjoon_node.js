const input = require('fs').readFileSync(0).toString().split(' ').map(Number);

console.log(Math.abs(input[0] - input[1]));