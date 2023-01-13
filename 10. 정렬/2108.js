const input = require('fs').readFileSync(0).toString().split('\n').map(Number);

const N = input[0];
let numbers = [];

for (let i = 1; i <= N; i++) {
    numbers.push(input[i]);
}

// 중앙값
numbers.sort((a, b) => a - b);
const median = numbers[Math.floor(N / 2)];

// 평균
let sum = 0;
for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
}

const average = Math.round(sum / N);

// 최빈값
let map = {};
let modeArr = [];
let mode = 0;

for (let number of numbers) {
    if (map[number]) map[number] += 1;
    else map[number] = 1;
}

let max = Math.max(...Object.values(map));

for (let key in map) {
    if (max === map[key]) modeArr.push(key);
}

if (modeArr.length > 1) {
    modeArr = modeArr.sort((a, b) => a - b);
    mode = modeArr[1];
} else mode = modeArr[0]; 

// 범위
const range = numbers[N - 1] - numbers[0];

console.log(`${average}\n${median}\n${mode}\n${range}`);

// 최빈값 다른 풀이
// const map = new Map();
// let max = 1;
// for (let number of numbers) {
//   if (map.has(number)) {
//     max = Math.max(max, map.get(number) + 1);
//     map.set(number, map.get(number) + 1);
//   } else map.set(number, 1);
// }

// const maxArr = [];
// for (let [key, val] of map) {
//   if (val === max) maxArr.push(key);
// }
