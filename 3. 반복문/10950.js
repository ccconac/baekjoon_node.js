let input = require('fs').readFileSync(0).toString().split('\n');

for (let i = 1; i <= input[0]; i++) {
    let n = input[i].split(' ');
    console.log(Number(n[0]) + Number(n[1]));
}