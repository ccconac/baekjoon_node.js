const input = require('fs').readFileSync(0).toString().trim().split('\n');

const N = input.shift();
let members = input.map(m => m.split(' '));

members.sort((a, b) => a[0] - b[0]);

let result = '';
members.forEach((i) => {
    result += `${i[0]} ${i[1]}\n`;
})

console.log(result);