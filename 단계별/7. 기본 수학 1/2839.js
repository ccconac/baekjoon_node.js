let N = require('fs').readFileSync(0).map(Number);

let count = 0;

while (true) {
    if (N % 5 === 0) {
        console.log(N / 5 + count);
        break;
    }

    if (N < 0) {
        console.log(-1);
        break;
    }

    N -= 3;
    count += 1;
}