const input = require('fs').readFileSync(0).toString().split('\n');

const [N, A, M, B] = input.map(i => i.split(' ').map(Number));
const set = new Set(A);

const result = B.map(i => set.has(i) ? 1 : 0);

console.log(result.join('\n'));