const input = require('fs').readFileSync(0).toString().split('\n').map(numbers => numbers.split(' ').map(Number));

let i = 0;
let j = 0;

while (true) {
    input[i].sort((a, b) => a - b);
    
    if (input[i][j] ** 2 + input[i][j + 1] ** 2 == input[i][j + 2] ** 2) {
        console.log("right");
    } else { 
        console.log("wrong"); 
    }

    i++;

    if (input[i][j] === 0 && input[i][j + 1] === 0 && input[i][j + 2] === 0) break;
}