const input = require('fs').readFileSync(0).toString().trim().split('\n');

const N = input.shift();
let meeting = input.map(m => m.split(' ').map(Number));

meeting.sort((a, b) => {
    if (a[1] === b[1]) return a[0] - b[0];
    else return a[1] - b[1];
})

let count = 0;
let temp = meeting[0][1];

for (let i = 1; i < N; i++) {
    if (temp <= meeting[i][0]) {
        temp = meeting[i][1];
        count += 1;
    }
}

console.log(count + 1);