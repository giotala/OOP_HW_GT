// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const emp = require("./Employee")

class Manager extends emp {
    constructor(name, id, email, officeNumber) {
        super(name, id, email)
        this.officeNumber = officeNumber;

    }
    getOfficeNumber() {
        return this.officeNumber;
    }
    getRole() {
        return "Manager";
    }
}

// {
//     constructor(name, role, id, email, officeNumber) {
//         this.name = name;
//         this.role = role;
//         this.id = id;
//         this.email = email;
//         this.officeNum = officeNumber;    
//     }
//     getName() {
//         return this.name;
//     }
//     getRole() {
//         return this.role;
//     }
//     getID() {
//         return this.id;
//     }
//     getEmail() {
//         return this.email;
//     }
//     getOfficeNumber() {
//         return this.officeNumber;
//     }
// }

module.exports = Manager;