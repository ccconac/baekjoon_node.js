const input = require('fs').readFileSync(0).toString().split('\n');

const numbers = input.shift();
let time = input.map(i => i.split(' ').map(Number))[0].sort((a, b) => a - b);
let result = 0;

for (let i = 0; i < time.length; i++) {
    result += time[i] * (time.length - i);
}

console.log(result);