const [x, y, w, h] = require('fs').readFileSync(0).toString().split(' ').map(Number);

const min = [x, y, w - x, h - y];
 
console.log(Math.min.apply(null, min));

