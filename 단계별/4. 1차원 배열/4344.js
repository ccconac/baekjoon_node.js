const input = require('fs').readFileSync(0).toString().split('\n');

let C = Number(input[0]);

for (let i = 1; i <= C; i++) {
    let scores = input[i].split(' ');
    let N = Number(scores[0]);
    let sum = 0;

    for (let j = 1; j <= N; j++) {
        sum += Number(scores[j]);
    }
    let avg = sum / N;

    let averageStudent = 0;
    for (let k = 1; k <= N; k++) {
        if (avg < scores[k]) averageStudent += 1;
    }
    console.log(`${(averageStudent / N * 100).toFixed(3)}%`);
}