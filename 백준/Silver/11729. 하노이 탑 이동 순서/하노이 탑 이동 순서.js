const input = require('fs').readFileSync(0).toString();

let N = Number(input);
let count = 0;
let result = [];

function hanoi(n, x, y) {
    if (n > 1) {
        hanoi(n - 1, x, 6 - x - y);
    }

    count += 1;
    result.push(`${x} ${y}`);

    if (n > 1) {
        hanoi(n - 1, 6 - x - y, y);
    }
}

hanoi(N, 1, 3);
console.log(`${count}\n${result.join('\n')}`);