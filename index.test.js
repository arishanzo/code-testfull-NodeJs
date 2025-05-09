import { test } from 'node:test';
import assert from 'node:assert';
import sum from "./index.js";

test('should sum correctly', () => {

    const a = 1;
    const b = 1;
    
    const sumAction = sum(a, b);

    const expectedValue = 2;
    assert.equal(sumAction, expectedValue);

});



test('should throw an error if string passed on numA parameter', () => {
  const result = sum('5', 2);
  assert.strictEqual(result, 0);
  });


  test('should throw an error if string passed on numB parameter', () => {
    const result = sum(5, '2');
  assert.strictEqual(result, 0);
  });

  
test('should throw an error if string passed on < 0 parameter', () => {
  const result = sum(-2, -2);
  assert.strictEqual(result, 0);
});