const multiply = require('./multiply');

// describe is used for logically grouping tests together
describe('test multiply positive scenarios', () => {
  // 'test' or 'it' is used to write the actual tests
  test('multiply 3*2 should should equal to 6', () => {
    // 'expect' uses Jest's built-in assertion library
    expect(multiply(3, 2)).toBe(6);
  });
})

