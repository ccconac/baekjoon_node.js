let numbers = require('fs').readFileSync(0).toString().split('\n').map(Number);

let max = numbers[0];
let idx = 0;

for (let i = 0; i < 9; i++) {
    if (max < numbers[i]) { 
        max = numbers[i];
        idx = i;
    }
}

console.log(`${max}\n${idx + 1}`);