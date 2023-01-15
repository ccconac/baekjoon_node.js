const input = require('fs').readFileSync(0).toString().split('\n').map(i => i.trim().split(' ').map(Number));

const [row, col] = input.shift();
const arr = new Array(col).fill(0);
let array = [];

for (let i = 0; i < row; i++) {
    array.push([...arr]); // 전개 구문 (배열 복사)
}

for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
        array[i][j] = input[i][j] + input[i + row][j];
    }
}

let result = '';
for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
        result += `${array[i][j]} `;
    }
    result += '\n'
}

console.log(result);