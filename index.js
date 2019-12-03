const { 
  nameValidator,
  ageValidator,
  weightValidator
} = require('./lib/validator.js');


const dog = { name: 'spot', age: 5 };

console.log(nameValidator.validate(dog));
console.log(ageValidator.validate(dog));
console.log(weightValidator.validate(dog));

