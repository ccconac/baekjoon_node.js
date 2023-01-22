const input = require('fs').readFileSync(0).toString().trim().split('');

let result = '';

for (let i = 0; i < input.length; i++) {
    if (input[i].charCodeAt(0) >= 65 && input[i].charCodeAt(0) <= 90) {
        result += input[i].toLowerCase();
    } else {
        result += input[i].toUpperCase();
    }
}

console.log(result);
