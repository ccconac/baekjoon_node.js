let X = require('fs').readFileSync(0).map(Number);

let num = 1;

while (X > 0) {
    X -= num;
    if (X <= 0) {
        X += num;
        break;
    }
    num += 1;
}

if (num % 2 === 0) {
    console.log(`${1 + (X - 1)}/${num - (X - 1)}`);
} else {
    console.log(`${num - (X - 1)}/${1 + (X - 1)}`);
}
