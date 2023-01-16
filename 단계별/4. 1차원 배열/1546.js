const input = require('fs').readFileSync(0).toString().split('\n');

let N = input[0];
let scores = input[1].split(' ');
let newScores = [];
let M = scores[0]
let sum = 0;

for (let i = 1; i < N; i++) {
    if (M < Number(scores[i])) M = scores[i];
}

for (let i = 0; i < N; i++) {
    newScores.push(scores[i] / M * 100);
    sum += newScores[i];
}

console.log(sum / N);