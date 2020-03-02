const multiply = require('./multiply');

// describe is used for logically grouping tests together
describe('test multiply positive scenarios', () => {
  // 'test' or 'it' is used to write the actual tests
  test('multiply 3*2 should should equal to 6', () => {
    // 'expect' uses Jest's built-in assertion library
    expect(multiply(3, 2)).toBe(6);
  });
})

test('object example', () => {
  const data = { first: 1 };
  data['second'] = 2;
  // .toBe() uses strict equality
  // .toEqual() tests the value of an object
  expect(data).toEqual({ first: 1, second: 2 });
});

test('multiply 4*3 should should not equal to 11', () => {
  // Example of .not usage
  expect(multiply(4, 3)).not.toBe(11);
});

