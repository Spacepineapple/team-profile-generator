//Create a Class Employee
class Employee {
    //Give the employee a name, id and email based on initial parameters
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }
    //Create a method to get the employee's name
    getName() {
        return this.name;
    }
    //Create a method to get the employee's id
    getId() {
        return this.id;
    }
    //Create a method to get the employee's email
    getEmail() {
        return this.email;
    }
    //Create a method to get the employee's role
    getRole() {
        return "Employee";
    }
}

//Export the class
module.exports = Employee;