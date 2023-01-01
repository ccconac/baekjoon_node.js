const input = require('fs').readFileSync(0).toString().split('\n');

const N = Number(input[0]);
let gropWords = 0;

for (let i = 1; i <= N; i++) {
  const words = input[i];
  const letter = [];
  let isGroupWord = true;

  for (let j = 0; j < words.length; j++) {
    if (letter.indexOf(words[j]) === -1) {
      letter.push(words[j]);
    } else {
      if (letter.indexOf(words[j]) !== letter.length - 1) {
        isGroupWord = false;
        break;
      }
    }
  }

  if (isGroupWord) {
    gropWords += 1;
  }
}

console.log(gropWords);