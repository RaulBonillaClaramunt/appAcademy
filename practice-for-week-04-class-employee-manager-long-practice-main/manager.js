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

    calculateBonus(multiplyer) {
        let bonus = ((this.salary + this._totalSubSalary()) * multiplyer);
        return bonus;
    };

    _totalSubSalary() {
        let sum = 0;
        let employees = this.employees;
        for (const employee of employees) {
            if (employee instanceof Employee) {
                sum += employee.salary;
            }
            if (employee instanceof Manager) {
                //sum += employee.salary;
                return sum += employee._totalSubSalary();
            }
        }
        return sum;
    };
}

module.exports = Manager;

//const splinter = new Manager('Splinter', 100000, 'Sensei');
//console.log(splinter);

const splinter = new Manager('Splinter', 100000, 'Sensei');
const leo = new Manager('Leonardo', 90000, 'Ninja', splinter);
const raph = new Manager('Raphael', 90000, 'Ninja', leo);
const mikey = new Employee('Michelangelo', 85000, 'Grasshopper', raph);
const donnie = new Employee('Donatello', 85000, 'Grasshopper', raph);

console.log(splinter.calculateBonus(0.05)); // => 22500
console.log(leo.calculateBonus(0.05)); // => 17500
console.log(raph.calculateBonus(0.05)); // => 13000
