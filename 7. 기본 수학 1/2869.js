const input = require('fs').readFileSync(0).toString().split(' ');

const [A, B, V] = [input[0], input[1], input[2]].map(Number);

let day = Math.ceil((V - B) / (A - B));
console.log(day);

// 1. 시간 초과
// while (true) {
//     h += A - B;
//     day += 1;
//     if (V <= h + A) {
//         h += A;
//         day += 1;
//         break;
//     }
// }

// console.log(day);


