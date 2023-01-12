const input = require('fs').readFileSync(0).toString().trim().split('\n');

const N = Number(input.shift());
let array = input.map(i => i.split(' ').map(Number));
let result = '';

array.sort((a, b) => {
    if (a[0] !== b[0]) return a[0] - b[0];
    else return a[1] - b[1]; 
});

array.forEach((i) => {
    result += `${i[0]} ${i[1]}\n`
});

console.log(result);