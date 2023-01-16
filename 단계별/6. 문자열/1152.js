const input = require('fs').readFileSync(__dirname + '/textfile.txt').toString().trim().split(' ');

let cnt = 0;

for (let i = 0; i < input.length; i++) {
    if (input[i] !== '') cnt += 1;
}

console.log(cnt);