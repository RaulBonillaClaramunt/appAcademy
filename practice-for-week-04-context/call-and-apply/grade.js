// Do not modify!
const GradeBook = require('./classes/gradebook.js');
const grades = new GradeBook([100, 50, 90, 20, 30]);
const gradesAvg = grades.getAverage;

/*
Without modifying GradeBook, grades, or gradesAvg,
correctly print out the average of the grades
with and without a 20 point bonus
*/
// You can modify the following lines
let grades1Average = gradesAvg.apply(grades);
let grades1WithBonus = gradesAvg.apply(grades, [20]);

console.log('Grade list');
console.log(grades1Average);     // should print out: 58
console.log(grades1WithBonus);   // should print out: 78
