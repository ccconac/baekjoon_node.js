const input = require('fs').readFileSync(0).toString().split(' ').map(Number);

const rest = input[1] - input[0];

console.log(`${rest} ${input[1]}`);

