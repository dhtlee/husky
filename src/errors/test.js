class ExtendableError extends Error {
  constructor(message) {
    super(message);
    this.name = this.constructor.name;
  }
}

class TestError extends ExtendableError {}

export default TestError;
