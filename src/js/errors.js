const ERROR = {
  EMPTY_LINE: '',
  EMPTY_VALUE: 'Empty value',
  INCORRECT_CITY: 'Not found. Please enter a correct city name.',
  NOT_RESPONDING: 'Oops! Server disconnected.',
  NaN: 'Data error, not a number received',
};

class CustomError extends Error {
  constructor(message) {
    super(message);
    this.name = this.constructor.name;
  }
}

export { CustomError, ERROR };
