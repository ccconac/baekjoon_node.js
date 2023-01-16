const input = require('fs').readFileSync(0).toString().split('\n');

let sum = 0;
let i = 0;

while (true) {
    let n = input[i].split(' ').map(Number);
    if (n[0] === 0 && n[1] === 0) {
        break;
    }
    sum = n[0] + n[1];
    console.log(sum);
    i++;
}