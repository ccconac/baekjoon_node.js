let input = require('fs').readFileSync(0).toString().trim();

let count = 0;

while (true) {
  if (input % 5 === 0) {
    console.log(input / 5 + count);
    break;
  }  
  if (0 > input) {
    console.log(-1);
    break;
  }
  count += 1;
  input -= 3;
}