const input = require('fs').readFileSync(0).toString().split('\n');

let X = Number(input[0]);
let N = Number(input[1]);
let total = 0;

for (let i = 2; i <= N + 1; i++) {
    let stock = input[i].split(' ').map(Number);
    total += stock[0] * stock[1];
}

if (X === total) {
    console.log('Yes');
} else {
    console.log('No');
}