const Person = require('./person');

class Teacher extends Person {
  constructor(firstName, lastName, age, subject, yearsOfExperience) {
    if (typeof firstName !== 'string' || typeof lastName !== 'string') {
    throw new Error ('firstName and lastName need to be strings.');
    }
    if (typeof age !== 'number' || age <= 5) {
      throw new Error ('age must be a number higher than 5.');
    }
    if (typeof subject !== 'string') {
      throw new Error ('subject must be a string.');
    }
    if (typeof yearsOfExperience !== 'number' || yearsOfExperience < 0) {
      throw new Error ('yearsOfExperience must be a positive number.');
    }
    super(firstName, lastName, age);
    this.subject = subject;
    this.yearsOfExperience = yearsOfExperience;
  }

  static combinedYearsOfExperience(teachers) {
    let count = 0;
    for (const teacher of teachers) {
      count += teacher.yearsOfExperience;
    }
    return count;
  }

  introduce() {
    return `Hello. I am ${this.firstName} ${this.lastName}, and I have been teaching ${this.subject} for ${this.yearsOfExperience} years.`;
  }

  static introduceTeacher(teachers) {
    if (!Array.isArray(teachers)) {
      throw new Error("introduceTeacher only takes an array as an argument.");
    }

    for (let teacher of teachers) {
      if (!(teacher instanceof Teacher)) {
        throw new Error("All items in array must be Teacher class instances.");
      }
    }

    return teachers.map((teacher) => teacher.introduce());
  }
}

/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

try {
  module.exports = Teacher;
} catch {
  module.exports = null;
}
