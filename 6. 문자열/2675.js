const input = require('fs').readFileSync(0).toString().split('\n');

let T = Number(input[0]);
let P = '';

for (let i = 1; i <= T; i++) {
    let s = input[i].split(' ');
    let R = Number(s[0]);
    let S = s[1];
    
    for (let j = 0; j < S.length; j++) {
        for (let k = 0; k < R; k++) {
            P += S[j];
        }
    }
    P += "\n";
}
console.log(P);

