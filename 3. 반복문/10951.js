const input = require('fs').readFileSync(0).toString().trim().split('\n');

for (let i = 0; i < input.length; i++) {
    let n = input[i].split(' ').map(Number);
    console.log(n[0] + n[1]);
}