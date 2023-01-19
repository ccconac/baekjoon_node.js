const input = require('fs').readFileSync(0).toString().split('\n');

let [N, K] = input[0].split(' ');
let result = 0;

for (let i = N; i => 1; i--) {
    let div = Math.floor(K / input[i]);
    if (div === 0) continue;
    result += div;
    K = K % input[i];
    if (K === 0) break;
}

console.log(result);