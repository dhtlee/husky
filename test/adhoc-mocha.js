describe('mocha test with es6', () => {

  before('before function', () => {
    console.log('before');
  });

  after('after function', () => {
    console.log('after');
  });

  it('should pass with arrow functions', () => {
    console.log('Passed!');
  });
});
