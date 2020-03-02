// You can easily test for certain String values by using regex with .toMatch()
test('there is pool in Liverpool', () => {
  expect('Liverpool').toMatch(/pool/);
})

const multiply = require('./multiply');

describe('test multiply positive scenarios', () => {
  test('multiply 3*2 should should equal to 6', () => {
    expect(multiply(3, 2)).toBe(6);
    // Additional number matchers
    expect(multiply(3, 2)).toBeGreaterThan(5);
    expect(multiply(3, 2)).toBeLessThan(7);
    expect(multiply(3, 2)).toBeLessThanOrEqual(6);
  });
})

