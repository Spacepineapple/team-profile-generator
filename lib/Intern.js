//Import the Employee class so that Intern can inherit from Employee
const Employee = require("./Employee.js");

//Create a class Intern that inherits from Employee
class Intern extends Employee {
    //Create a name, id, email and school from initial parameters
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
    }
    //Create a method to get the employee's school
    getSchool() {
        return this.school;
    }
    //Create a method to get the employee's role
    getRole() {
        return "Intern";
    }
}

//Export the class
module.exports = Intern;
