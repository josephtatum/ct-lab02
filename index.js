const { 
  nameValidator,
  ageValidator,
  weightValidator
} = require('./lib/validator.js');

const {
  Schema
} = require('./lib/schema.js')

const dog = { name: 'spot', age: 5, weight: '20 lbs' };

// console.log(nameValidator.validate(dog));
// console.log(ageValidator.validate(dog));
// console.log(weightValidator.validate(dog));

const schema = new Schema({ 
  name: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    required: true
  },
  weight: {
    type: String
  }
});

const spot = {
  name: 'spot',
  age: 5,
  weight: '20 lbs'
};

const rover = {
  name: 'rover',
  age: '10'
};

const who = {
  age: 'hi'
};

schema.validate(spot) // returns { name: 'spot', age: 5, weight: '20 lbs' }
schema.validate(rover) // returns { name: 'rover', age: 10 };'
schema.validate(who) // throws a errors about name being required and age not being a number

