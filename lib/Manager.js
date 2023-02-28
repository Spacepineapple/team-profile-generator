//Import the Employee class so that Manager can inherit from Employee
const Employee = require("./Employee.js");

//Create a class Manager that inherits from Employee
class Manager extends Employee {
    //Create a name, id, email and officeNumber from initial parameters
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
    } 
    //Create a method to get the employee's office number
    getOfficeNumber() {
        return this.officeNumber;
    }
    //Create a method to get the employee's role
    getRole() {
        return "Manager";
    }
}

//Export the class
module.exports = Manager;
