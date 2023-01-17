const input = require('fs').readFileSync(0).toString().trim().split('\n');

const [N, M] = input.shift().split(' ').map(i => +i);
let dontListen = new Set();
let dontSee = new Set();

for (let i = 0; i < input.length; i++) {
    if (i < N) dontListen.add(input[i]);
    else dontSee.add(input[i]);
}
let result = [];

dontSee.forEach((i) => {
    if (dontListen.has(i)) result.push(i);
})

result.sort();

console.log(`${result.length}\n${result.join('\n')}`)