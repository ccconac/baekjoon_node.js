const input = require('fs').readFileSync(0).toString().split(' ').map(BigInt);

const money = input[0] / input[1];
const rest = input[0] % input[1];

console.log(`${money}\n${rest}`);