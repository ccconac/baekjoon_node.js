const input = require('fs').readFileSync(0).toString().trim().split('\n');

input.pop();
const numbers = input.map(i => i.split(' ').map(Number));

numbers.forEach(i => {
    if (i[1] % i[0] === 0) {
      console.log('factor')
    } else if (i[0] % i[1] === 0) {
      console.log('multiple')
    } else {
      console.log('neither')
    }
  })