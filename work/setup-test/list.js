const path = require('path');

const people = `
Name           |  NEUID   | Slack handle | github ID
Jiali Yuan     | 001060884| @Jiali Yuan  | Jiali-Yuan

`.split('\n').filter( truthy => truthy );

if (require.main === module) {
  // Run if we are being run directly

  // List the people
  for ( person of people ) {
    console.log(person);
  }
}
// If not being run directly, return the text
module.exports = people;
