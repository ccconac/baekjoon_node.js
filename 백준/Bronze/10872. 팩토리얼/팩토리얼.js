const input = require('fs').readFileSync(0).toString().trim();

let factorial = 1;

for (let i = 1; i <= input; i++) {
    factorial *= i;
}

console.log(factorial);