const input = require('fs').readFileSync(0).toString().trim().split('\n').map(Number).sort((a, b) => a - b);

const sum = input.reduce((a, b) => { return a += b });
const restNum = sum - 100;
let rest = [];

for (let i = 0; i < input.length; i++) {
    for (let j = i + 1; j <= input.length; j++) {
        if (input[i] + input[j] === restNum) rest.push(i, j);
    }
}

input.splice(rest[0], 1);
input.splice(rest[1] - 1, 1);

console.log(input.join('\n'));