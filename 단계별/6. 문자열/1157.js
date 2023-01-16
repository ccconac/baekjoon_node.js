const word = require('fs').readFileSync(0).toString().toUpperCase();

const answer = new Array(26).fill(0);

for (let i = 0; i < word.length; i++) {
    answer[word[i].charCodeAt(0) - 65] += 1;
}

const max = Math.max(...answer);
const maxIndex = answer.indexOf(max);

if (maxIndex === answer.lastIndexOf(max)) {
    console.log(String.fromCharCode(maxIndex + 65));
} else {
    console.log('?');
}
