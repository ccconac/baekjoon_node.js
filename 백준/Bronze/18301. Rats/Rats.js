const input = require('fs').readFileSync(0).toString().trim().split(' ').map(Number);

console.log(Math.floor((input[0] + 1) * (input[1] + 1) / (input[2] + 1) - 1));
