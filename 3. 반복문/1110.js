let N = require('fs').readFileSync(__dirname + '/textfile.txt').toString();

let sumN;
let firstN = N;
let count = 0;

if (N < 10) N = '0' + N[0];

while (true) {
    sumN = Number(N[0]) + Number(N[1]);
    sumN = sumN.toString();
    if (sumN < 10) sumN = '0' + sumN[0];
    N = N[1] + sumN[1];
    count += 1;

    if (Number(N) === Number(firstN)) {
        break;
    } 
}

console.log(count);