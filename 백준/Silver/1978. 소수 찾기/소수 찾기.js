const input = require('fs').readFileSync(0).toString().split('\n');

const N = input.shift();
const numbers = input.map(i => i.split(' ').map(Number))[0];
let result = 0;

for (let i = 0; i < N; i++) {
    if (numbers[i] === 1) {
        continue;
    }
    else {
        let count = 0;
        for (let j = 2; j < numbers[i]; j++) {
            if (numbers[i] % j === 0) count += 1;
        }
    if (count === 0) result += 1;
    }
}   

console.log(result);