const fs = require('fs');
// '/dev/stdin'
let input = fs.readFileSync(0).toString().split(' ');

const A = parseInt(input[0]);
const B = parseInt(input[1]);

if (A > B) {
    console.log('>');
} else if (A < B) {
    console.log('<');
} else {
    console.log('==');
}