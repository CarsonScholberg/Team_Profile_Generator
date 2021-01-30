class Employee {
    constructor(nameValue, idValue, emailValue){
        this.name = nameValue
        this.id = idValue
        this.email = emailValue
    }

    getName() {
        return this.name
    }

    getId() {
        return this.id
    }

    getEmail() {
        return this.email
    }

    getRole() {
        return "Employee"
    }
}

module.exports = Employee
// Employee("Jerry", 123, "test@test.com")