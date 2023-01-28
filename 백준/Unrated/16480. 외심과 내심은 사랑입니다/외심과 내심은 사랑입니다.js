let input = require('fs').readFileSync(0).toString().split(' ').map(Number);

// 오일러 삼각형 정리
const result = input[0] ** 2 - 2 * input[1] * input[0];
console.log(result)
