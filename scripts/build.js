
const fs = require('node:fs');
const path = require('node:path');

const root = path.join(__dirname, '..');
const dist = path.join(root, 'dist');

fs.mkdirSync(dist, { recursive: true });
fs.copyFileSync(
  path.join(root, 'src/calculator.js'),
  path.join(dist, 'calculator.js')
);

console.log('Build successful!');
