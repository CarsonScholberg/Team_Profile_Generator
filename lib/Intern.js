const Employee = require("./Employee");

class Intern extends Employee{
    constructor(nameValue, idValue, emailValue, schoolVal){
        super(nameValue, idValue, emailValue)
        this.school = schoolVal
    }

    getRole() {
        return "Intern"
    }

    getSchool() {
        return this.school
    }
}

module.exports = Intern;