const fs = require('fs');
let input = fs.readFileSync(0).toString().split('\n');

const current = input[0].split(' ').map(Number);
const cookTime = Number(input[1]);

let H = current[0];
let M = current[1];

const CTH = parseInt(cookTime / 60);
const CTM = parseInt(cookTime % 60);

if (CTM + M >= 60) {
    H = H + CTH + 1;
    M = CTM + M - 60;
} else if (CTM + M < 60) {
    H = H + CTH;
    M = CTM + M;
}

if (H >= 24) {
    H = H - 24;
}

console.log(H, M);