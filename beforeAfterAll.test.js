const setup = () => console.log('Setting up before tests run');
const tearDown= () => console.log('Finish up after tests run');

describe('new account creation checks', () => {
  // Will run once at the beginning of the test
  beforeAll(() => setup()); 
  // Will run once after the entire test is complete
  afterAll(() => tearDown());

  test('new account 1 created', () => {
    const account = 'account1';
    expect(account).toEqual('account1');
  });

  test('new account 2 created', () => {
    const account = 'account2';
    expect(account).toEqual('account2');
  });
})
