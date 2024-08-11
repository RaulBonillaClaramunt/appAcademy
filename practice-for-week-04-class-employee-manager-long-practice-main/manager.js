const Employee = require('./employee');

class Manager extends Employee {
    constructor(name, title, salary, manager, employees) {
        super(name, title, salary, manager);
        this.employees = [];//must be an array
    }

    addEmployee(employee) {
            this.employees.push(employee);
            //return this.employees;
    }
}

module.exports = Manager;

//const splinter = new Manager('Splinter', 100000, 'Sensei');
//console.log(splinter);

const splinter = new Manager('Splinter', 100000, 'Sensei');
console.log('Before: ', splinter);

const leo = new Employee('Leonardo', 90000, 'Ninja', splinter);
const mikey = new Employee('Michelangelo', 90000, 'Ninja', splinter);
const donnie = new Employee('Donatello', 90000, 'Ninja', splinter);
const raph = new Employee('Raphael', 90000, 'Ninja', splinter);

console.log('After: ', splinter);
