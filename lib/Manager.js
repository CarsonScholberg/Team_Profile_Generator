const Employee = require("./Employee");

class Manager extends Employee{
    constructor(nameValue, idValue, emailValue, officeNumberVal){
        super(nameValue, idValue, emailValue)
        this.officeNumber = officeNumberVal
    }

    getRole() {
        return "Manager"
    }

    getOfficeNumber() {
        return this.officeNumber
    }
}

module.exports = Manager;