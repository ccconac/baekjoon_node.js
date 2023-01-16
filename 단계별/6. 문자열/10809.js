const S = require('fs').readFileSync(0).toString();

let result = [];

for (let i = 97; i <= 122; i++) {
    let ascii = String.fromCharCode(i);
    let res = S.indexOf(ascii);
    result.push(res);
}

console.log(result.join(' '));