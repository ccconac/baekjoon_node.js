const N = require('fs').readFileSync(0).toString().trim();

let result = '';

for (let i = 0; i < N; i++) {
    result += ' '.repeat(i);
    for (let j = N - i; j > N - i - 1; j--) {
        result += `${'*'.repeat(j)}\n`;
    }
}

console.log(result);