class Employee {
    constructor(name, salary, title, manager) {
        this.name = name;
        this.title = title;
        this.salary = salary;
        this.manager = null;
        if (manager) {
            manager.addEmployee(this);
        }
    }

    calculateBonus(multiplier) {
        let bonus = (this.salary) * multiplier;
        return bonus;
    }
}

module.exports = Employee;

//const leo = new Employee('Leonardo', 90000, 'Ninja');
//console.log(leo)

const raph = new Employee('Raphael', 90000, 'Ninja');
const donny = new Employee('Donatello', 85000, 'Grasshopper');

console.log(raph.calculateBonus(0.25)); // => 22500
console.log(donny.calculateBonus(0.15)); // => 12750
