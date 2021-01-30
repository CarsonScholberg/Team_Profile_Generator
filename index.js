const fs = require("fs");
const inquirer = require("inquirer");
const Manager = require("./lib/Manager");
const teamGenerator = require("./src/page-template");

const employeeArr = []
function init() {
    inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "What is your new Manager's name? "
        },
        {
            name: "id",
            message: "Enter their ID: "
        },
        {
            name: "email",
            message: "Enter their Email: "
        },
        {
            name: "officeNumber",
            message: "Enter their officeNumber: "
        },
    ]).then(res => {
        const managerResponse = new Manager(res.name, res.id, res.email, res.officeNumber)
        employeeArr.push(managerResponse);
        mainMenu()
        // fs.writeFile("index.html", teamGenerator(employeeArr), err => {
        //     if(err) throw err;
        // })
    })
}

function mainMenu () {

}

init();