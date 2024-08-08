const Person = require('./person');

class Student extends Person {
  constructor(firstName, lastName, age, major, GPA) {
    super(firstName, lastName, age);
    this.major = major;
    this.GPA = GPA;
  }

  static compareGPA(Student1, Student2) {
    if (!(Student1 instanceof Student) || !(Student2 instanceof Student)) {
      throw new Error("Both arguments must be instances of Student.");
    }

    if (Student1.GPA === Student2.GPA) {
      return "Both students have the same GPA.";
    } else if (Student1.GPA > Student2.GPA) {
      return `${Student1.firstName} ${Student1.lastName} has the higher GPA.`
    } else {
      return `${Student2.firstName} ${Student2.lastName} has the higher GPA.`
    }
  }
}

/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

try {
  module.exports = Student;
} catch {
  module.exports = null;
}
