// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(id, name, email);
        this.school = school;
    }

    getSchool() {
        console.log(`The intern's school is ${this.school}`);
        return this.school;
    }

    getRole() {
        return ("Intern");
    }
}


//   * school 

//   * getSchool()

//   * getRole() // Overridden to return 'Intern'