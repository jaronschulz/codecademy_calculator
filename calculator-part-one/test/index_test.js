const assert = require('assert');
const Calculate =  require('../index.js')

describe('Calculate', () => {
  describe ('.add', () => {
    it ('returns the value of two numbers added together', () => {

      let inputOne = 2;
      let inputTwo = 3;
      let expected = 5;

      result = Calculate.add(inputOne, inputTwo);

      assert.equal(expected, result);

    });
  });
  describe ('.subtract', () => {
    it ('returns the difference of the first number minus the second number', () => {

      let inputOne = 10;
      let inputTwo = 6;
      let expected = 4;

      result = Calculate.subtract(inputOne, inputTwo);

      assert.equal(expected, result);

    });
  });
  describe ('.multiply', () => {
    it ('returns the product of two numbers', () => {

      let inputOne = 3;
      let inputTwo = 5;
      let expected = 15;

      result = Calculate.multiply(inputOne, inputTwo);

      assert.equal(expected, result);

    });
  });
  describe ('.divide', () => {
    it ('returns the first number divided by the second number', () => {

      let dividend = 2;
      let divisor = 1;
      let expected = 2;

      result = Calculate.divide(dividend, divisor);

      assert.equal(expected, result);

    });

    it ('throws an error when the divisor is 0', () => {

      let dividend = 8;
      let divisor = 0;
      let expected = Error;

      const exercise = () => Calculate.divide(dividend, divisor);


      assert.throws(exercise, expected);
    })
  });
  describe ('.absoluteValue', () => {
    it ('returns the absolute value of the input number', () => {

      let input = -5;
      let expected = 5;

      result = Calculate.absoluteValue(input);

      assert.equal(expected, result);

    })
  })

});
