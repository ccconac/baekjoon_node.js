const input = require('fs').readFileSync(0).toString().split(' ').map(BigInt);

console.log(`${(input[0] + input[1]) * (input[0] - input[1])}`)