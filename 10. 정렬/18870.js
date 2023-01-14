const input = require('fs').readFileSync(0).toString().split('\n');

const N = input.shift();
let numbers = new Set(input.map(i => i.split(' ').map(Number))[0].sort((a, b) => a - b));
const sortNumbers = Array.from(numbers);
const map = new Map();

// [...numbers].forEach((item, index) => {
//     map.set(item, index);
// })

for (let i = 0; i < N; i++) {
    map.set(sortNumbers[i], i);
}

let result = '';
input[0].split(' ').forEach((item, index) => {
   result += `${map.get(+item)} `;
})

console.log(result);


