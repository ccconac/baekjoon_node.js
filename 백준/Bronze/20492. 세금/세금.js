const input = require('fs').readFileSync(0).toString();

console.log(`${input * 0.78} ${input * 0.8 + (input * 0.2 * 0.78)}`)