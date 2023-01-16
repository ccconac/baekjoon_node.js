const input = require('fs').readFileSync(0).toString().trim().split('\n').map(row => row.split(' ').map(Number));

let max = 0;
let row = 0;
let col = 0;

for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
        if (max < input[i][j]) {
            max = input[i][j];
            row = i;
            col = j;
        }
    }
}

console.log(`${max}\n${row + 1} ${col + 1}`)

// let max = Math.max(...input[0]);
// let row = 0;
// let col = 0;

// for (let i = 1; i < 9; i++) {
//     if (max < Math.max(...input[i])) {
//         max = Math.max(...input[i]);
//         row = i;
//         col = input[i].indexOf(max);
//     }
// }

// console.log(`${max}\n${row + 1} ${col + 1}`);
