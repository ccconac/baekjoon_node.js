const input = require('fs').readFileSync(0).toString();

let result = 0;

if (input >= 5) {
    result += Math.floor(input / 5);
}

if (input % 5 === 0) {
    console.log(result);
} else {
    console.log(result + 1);
}

