const N = require('fs').readFileSync(0).toString();

for (let i = N; i > 0; i--) {
    console.log(`${'*'.repeat(i)}`);
}

