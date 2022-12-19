let input = require('fs').readFileSync(0).toString().split('\n');

let T = Number(input[0]);
let sum = 0;

for (let i = 1; i <= T; i++) {
    let n = input[i].split(' ').map(Number);
    sum = n[0] + n[1];
    console.log(`Case #${i}: ${n[0]} + ${n[1]} = ${sum}`);
}