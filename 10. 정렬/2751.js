const input = require('fs').readFileSync(0).toString().split('\n').map(Number);

const N = input[0];
let numbers = [];

for (let i = 1; i <= N; i++) {
    numbers.push(input[i]);
}

numbers.sort((a, b) => a - b);

console.log(numbers.join('\n'));

// 힙 정렬 (오답 처리가 됐는데 어디가 잘못된 건지 모르겠다!)
// const N = input[0];
// let numbers = [];

// for (let i = 1; i <= N; i++) {
//     numbers.push(input[i]);
// }

// function heapify(a, index, size) {
//     let temp = index;
//     let lc = index * 2 + 1;
//     let rc = index * 2 + 2;

//     if (lc < size && a[lc] > a[temp]) {
//         temp = lc;
//     }

//     if (rc < size && a[rc] > a[temp]) {
//         temp = rc;
//     }

//     if (temp !== index) {
//         [a[temp], a[index]] = [a[index], a[temp]];
//         heapify(a, temp, size);
//     }
// }

// function heap_sort(a) {
//     for (let i = (a.length - 1) / 2; i > -1; i--) {
//         heapify(a, i, a.length);
//     }
//     for (let i = a.length - 1; i >= 0; i--) {
//         [a[0], a[i]] = [a[i], a[0]];
//         heapify(a, 0, i);
//     }

//     return a;
// }

// function solution(result) {
//     heap = heap_sort(result);
//     console.log(heap.join('\n'));
// }

// solution(numbers);