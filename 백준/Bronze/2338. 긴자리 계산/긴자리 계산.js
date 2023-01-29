const input = require('fs').readFileSync(0).toString().trim().split('\n').map(BigInt);

console.log(`${input[0] + input[1]}\n${input[0] - input[1]}\n${input[0] * input[1]}`)