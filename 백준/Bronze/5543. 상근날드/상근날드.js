const input = require('fs').readFileSync(0).toString().split('\n').map(Number);

let set = [];

for (let i = 0; i < 3; i++) {
    set.push(input[i] + input[3] - 50);
    set.push(input[i] + input[4] - 50);
}

console.log(Math.min(...set));
