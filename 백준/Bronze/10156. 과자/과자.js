const input = require('fs').readFileSync(0).toString().split(' ').map(Number);

const result = input[0] * input[1] - input[2];
console.log(result > 0 ? result : 0);