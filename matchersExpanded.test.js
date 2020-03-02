// You can easily test for certain String values by using regex with .toMatch()
test('there is pool in Liverpool', () => {
  expect('Liverpool').toMatch(/pool/);
})
