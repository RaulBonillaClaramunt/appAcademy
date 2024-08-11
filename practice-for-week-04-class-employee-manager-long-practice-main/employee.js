class Employee {
    constructor(name, title, salary, manager) {
        this.name = name;
        this.title = title;
        this.salary = salary;
        this.manager = null;
        if (manager) {
            manager.addEmployee(this);
        }
    }
}

module.exports = Employee;

//const leo = new Employee('Leonardo', 90000, 'Ninja');
//console.log(leo)
