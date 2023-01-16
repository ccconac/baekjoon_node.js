const input = require('fs').readFileSync(0).toString().split('\n');

let num = Number(input[0]);

for (let i = 1; i <= num; i++) {
    let cnt = 0;
    let score = 0;
    for (let j = 0; j < input[i].length; j++) {
        if (input[i][j] === 'O') {
            cnt += 1;
        } else {
            cnt = 0;
        }
        score += cnt;
    }
    console.log(score);
}