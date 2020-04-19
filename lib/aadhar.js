
/**
/**
/**
 *
 * @namespace faker.Aadhar
 */
function Aadhar (faker) {
  var f = faker.fake,
      Helpers = faker.helpers;

  this.uniqueIdentity = function() {
    return faker.random.arrayElement(faker.definitions.aadhar.uniqueIdentity);
  };
  }
module.exports = Aadhar;

