const {
  getCaster
} = require('./types.js');

class Validator {
  constructor(keyValue, { type, required }) {
    this.keyValue = keyValue,
    this.type = type,
    this.required =  required;
  }  

  validate(object) {
    const objectType = getCaster(this.type);
    return objectType(object[this.keyValue]);
  }
}

const nameValidator = new Validator('name', {
  type: String,
  required: true
});

const ageValidator = new Validator('age', {
  type: Number,
  required: true
});

const weightValidator = new Validator('weight', {
  type: String,
  required: true
});

module.exports = { 
  Validator,
  nameValidator,
  ageValidator,
  weightValidator
};
