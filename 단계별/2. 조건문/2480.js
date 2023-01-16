const fs = require('fs');
const [A, B, C] = fs.readFileSync(0).toString().split(' ').map(Number);

let max = A;

if (A === B && B === C && A === C) {
    console.log(10000 + B * 1000)
} else if (A === B || B === C || C === A) {
    if (A === B || C === A) { 
        console.log(1000 + A * 100); 
    } else if (B === C) {
        console.log(1000 + B * 100);
    }
} else if (A !== B && B !== C && A !== C) {
    if (max < B) max = B;
    if (max < C) max = C;
    console.log(max * 100);
}