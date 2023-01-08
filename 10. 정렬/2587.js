const input = require('fs').readFileSync(0).toString().split('\n').map(Number);

const numbers = [];

for (let i = 0; i < 5; i++) {
    numbers.push(input[i]);
}

numbers.sort((a, b) => a - b);

let sum = 0;
for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
}

console.log(sum / 5 + '\n' + numbers[2]);

// 오답 처리됨 (sort() 함수 사용하니 정답 처리되는 것으로 봐서 medianValue() 함수 문제인 것 같음)
// const numbers = [];

// for (let i = 0; i < input.length; i++) {
//     numbers.push(input[i]);
// }

// function avg(a) {
//     let sum = 0;
//     for (let i = 0; i < a.length; i++) {
//         sum += a[i];
//     }
//     let average = sum / 5;
    
//     return average;
// }

// function medianValue(a) {
//     let temp = 0;
//     for (let i = 0; i < a.length; i++) {
//         for (let j = i + 1; j < a.length; j++) {
//             if (a[i] > a[j]) {
//                 temp = a[i];
//                 a[i] = a[j];
//                 a[j] = temp;
//             }
//         }
//     }
//     return a[2];
// }

// function solution(result) {
//     average = avg(result);
//     median = medianValue(result);
//     console.log(average + '\n' + median);
// }

// solution(numbers);