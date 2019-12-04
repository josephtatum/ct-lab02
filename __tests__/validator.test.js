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

  it('should throw an error if the object doesn\'t inlude a required key/value pair', () => {
    expect(() => nameValidator.validate({ color: 'spot', age: 5 })).toThrowErrorMatchingSnapshot();
    expect(() => ageValidator.validate({ color: 'spot', weight: '5 lbs' }).toThrowErrorMatchingSnapshot());
  });

  it('should throw an error if the field is required and is the wrong type', () => {
    expect(() => nameValidator.validate({ color: 'spot', name: () => {} })).toThrowErrorMatchingSnapshot();
    expect(() => ageValidator.validate({ color: 'spot', age: () => { } })).toThrowErrorMatchingSnapshot();
  });

  it('should throw an error if the field isn\'t required and is the wrong type', () => {
    expect(() => weightValidator.validate({ color: 'spot', weight: () => { } })).toThrowErrorMatchingSnapshot();
  });

  it('should return null if the object key isn\'t included and isn\'t required.', () => {
    expect(weightValidator.validate({ color: 'spot', age: 5 })).toEqual('Not Required');
  });

});
