const fs = require('fs');
let input = fs.readFileSync(0).toString();

let n = Number(input[0]);

for (let i = 1; i <= 9; i++) {
    console.log(`${n} * ${i} = ${n * i}`);
}