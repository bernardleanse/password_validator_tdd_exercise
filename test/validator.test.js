const Validator = require("../src/validator");

describe(Validator, () => {
  beforeEach(() => {
    this.validator = new Validator
  })
  describe('#validate', () => {
    test('that it does not accept a password less than 8 characters', () => {
      expect(this.validator.validate('a')).toEqual([false, 'Password must be at least 8 characters'])
    });
  });
});