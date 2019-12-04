class Schema {
  constructor(schemaDefinition) {
    this.schemaDefinition = schemaDefinition,
    this.validators = Object.entries(
      schemaDefinition.map(object => {
        console.log(object);
      })
    );
  }

  validate(object) {
    console.log(Array.isArray(this.validators));
  } 
}

module.exports = { Schema };
