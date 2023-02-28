//Import the Employee class so that Engineer can inherit from Employee
const Employee = require("./Employee.js");

//Create a class Engineer that inherits from Employee
class Engineer extends Employee {
    //Create a name, id, email and github from initial parameters
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;
    }
    //Create a method to get the employee's github
    getGithub() {
        return this.github;
    }
    //Create a method to get the employee's role 
    getRole() {
        return "Engineer";
    }
}

//Export the class
module.exports = Engineer;
