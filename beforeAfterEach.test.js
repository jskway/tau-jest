const setupFirst = () => console.log('Setting up before tests run');

describe('new account creation checks', () => {
  // Will initialize before our tests are run
  beforeEach(() => setupFirst()); 

  test('new account 1 created', () => {
    const account = 'account1';
    expect(account).toEqual('account1');
  });

  test('new account 2 created', () => {
    const account = 'account2';
    expect(account).toEqual('account2');
  });
})
