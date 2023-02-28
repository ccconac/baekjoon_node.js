const input = require('fs').readFileSync(0).toString().split('\n').map(n => n.split(' ').map(Number));

const a = input[0];
const c = input[1];
const b = [c[0] - a[2], c[1] * 1/a[1], c[2] - a[0]];

console.log(b.join(' '));