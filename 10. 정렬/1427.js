let numbers = require('fs').readFileSync(0).toString().trim().split('').map(Number);

numbers = numbers.sort((a, b) => b - a);
console.log(numbers.join(''));
