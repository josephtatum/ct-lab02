const { Validator } = require('./lib/validator.js');

const nameValidator = new Validator('name', {
  type: String,
  required: true
});

const dog = {
  name: 'spot',
  age: 5,
  weight: '20 lbs'
};

console.log(nameValidator.validate(dog));
