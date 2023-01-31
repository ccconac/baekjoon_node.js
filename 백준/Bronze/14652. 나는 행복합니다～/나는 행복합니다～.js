const input = require('fs').readFileSync(0).toString().trim().split(' ').map(Number);

console.log(`${parseInt(input[2]/input[1])} ${parseInt(input[2]%input[1])}`);