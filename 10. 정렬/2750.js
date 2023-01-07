const input = require('fs').readFileSync(0).toString().split('\n').map(Number);

const N = input[0];
let result = [];

for (let i = 1; i <= N; i++) {
    result.push(input[i]);
}

function sort(a) {
    let temp = 0;
    for (let i = 0; i < a.length; i++) {
        for (let j = i + 1; j < a.length; j++) {
            if (a[i] > a[j]) {
                temp = a[i];
                a[i] = a[j];
                a[j] = temp;
            }
        }
    }
    return a;
}

function solution(result) {
    result = sort(result);
    console.log(result.join('\n'));
}

solution(result);