const input = require('fs').readFileSync(0).toString().trim().split('\n');

const T = input.shift();
const array = input.map(n => n.split(',').map(Number));
let result = [];

for (let i = 0; i < T; i++) {
    result.push(array[i][0] + array[i][1]);
}

console.log(result.join('\n'))