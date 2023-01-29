const input = require('fs').readFileSync(0).toString().trim().split(' ').map(BigInt);

let mul = input[0] * input[1];
let result = mul.toString();

console.log(result);
