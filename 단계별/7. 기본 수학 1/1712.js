const input = require('fs').readFileSync(0).toString().split(' ').map(Number);

const [A, B, C] = [input[0], input[1], input[2]];

let result = Math.floor(A / (C - B)) + 1;

B >= C ? console.log(-1) : console.log(answer);

// 시간 초과
// let totalCost = Number(input[0]);
// let salesCost = 0;
// let count = 0;

// while (true) {
//     totalCost += Number(input[1]);
//     salesCost += Number(input[2]);
//     count += 1;
//     if (salesCost > totalCost) {
//         break;
//     }
// }

// console.log(count);