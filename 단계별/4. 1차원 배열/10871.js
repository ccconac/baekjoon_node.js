const input = require('fs').readFileSync(0).toString().split('\n');

let firstInput = input[0].split(' ');
let N = Number(firstInput[0]);
let X = Number(firstInput[1]);
let A = input[1].split(' ');

for (let i = 0; i < A.length; i++) {
    if (A[i] < X) {
        process.stdout.write(A[i] + ' ');
    }
}