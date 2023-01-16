const input = require('fs').readFileSync(0).toString().trim().split('\n');

const N = input.shift();
const words = input.sort((a, b) => a.length - b.length || a.localeCompare(b));
const result = new Set(words);

console.log(Array.from(result).join('\n'));