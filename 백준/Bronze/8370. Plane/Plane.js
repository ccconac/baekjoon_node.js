const input = require('fs').readFileSync(0).toString().trim().split(' ').map(Number);

console.log(input[0] * input[1] + input[2] * input[3])
