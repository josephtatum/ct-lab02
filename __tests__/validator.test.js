const { 
  nameValidator,
  ageValidator,
  weightValidator
} = require('../lib/validator.js');


describe('validator module', () => {
  it('shoud tell us if an object is validated', () => {
    expect(nameValidator.validate({ name: 'spot' })).toEqual('spot');
    expect(ageValidator.validate({ age: '5' })).toEqual(5);
    expect(weightValidator.validate({ weight: '20 lbs' })).toEqual('20 lbs');
  });

});
