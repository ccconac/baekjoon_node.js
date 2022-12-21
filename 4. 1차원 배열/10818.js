const input = require('fs').readFileSync(0).toString().split('\n');

let N = Number(input[0]);
let A = input[1].split(' ');
let max = A[0];
let min = A[0];

for (let i = 0; i < A.length; i++) {
    if (max < Number(A[i])) max = A[i];
    if (min > Number(A[i])) min = A[i];
}

console.log(`${Number(min)} ${Number(max)}`);