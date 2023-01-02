const N = require('fs').readFileSync(0).toString().trim();

let room = 1;
let cnt = 1;

while (room < N) {
    room += 6 * cnt;
    cnt += 1;
}

console.log(cnt);
