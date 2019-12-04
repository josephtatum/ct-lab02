class Schema {
  constructor(keyValue, { type, required }) {
    this.keyValue = keyValue,
    this.type = type,
    this.required = required;
  }

  validate(object) {

  } 
}

module.exports = { Schema }