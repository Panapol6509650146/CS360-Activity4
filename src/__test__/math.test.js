// mathFunctions.test.js
const { add, subtract, multiply } = require('../math.js');

describe('Math functions', () => {
  
  test('add(3, 4) should return 7', () => {
    expect(add(3, 4)).toBe(7);
  });

  test('subtract(10, 5) should return 5', () => {
    expect(subtract(10, 5)).toBe(5);
  });

  test('multiply(6, 3) should return 18', () => {
    expect(multiply(6, 3)).toBe(18);
  });

  test('add should handle negative numbers', () => {
    expect(add(-3, -4)).toBe(-7);
  });

  test('subtract should return negative result for smaller minuend', () => {
    expect(subtract(5, 10)).toBe(-5);
  });

  test('multiply should return 0 when multiplying by 0', () => {
    expect(multiply(10, 0)).toBe(0);
  });
});
