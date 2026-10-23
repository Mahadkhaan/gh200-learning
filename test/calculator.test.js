
const test = require('node:test');
const assert = require('node:assert/strict');

const { add, multiply } = require('../src/calculator');

test('adds two numbers', () => {
  assert.equal(add(2, 3), 5);
});

test('multiplies two numbers', () => {
  assert.equal(multiply(3, 4), 12);
});
