const Person = require('./person');

class Teacher extends Person {
  constructor(firstName, lastName, age, subject, yearsOfExperience) {
    super(firstName, lastName, age);
    this.subject = subject;
    this.yearsOfExperience = yearsOfExperience;
  }

  static combinedYearsOfExperience(teachers) {

    if (!Array.isArray(teachers)) {
      throw new Error("combineYearsOfExperience only takes an array as an argument.");
      }

    let result = 0;
    for (const teacher of teachers) {
      result += teacher.yearsOfExperience;
    }

    return result;
  };
};
/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

try {
  module.exports = Teacher;
} catch {
  module.exports = null;
}
