const Employee = require("./Employee");

class Engineer extends Employee{
    constructor(nameValue, idValue, emailValue, github){
        super(nameValue, idValue, emailValue)
        this.github = github
    }

    getRole() {
        return "Engineer"
    }

    getGithub() {
        return this.github
    }
}

module.exports = Engineer;