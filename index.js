const fs = require("fs");
const inquirer = require("inquirer");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const teamGenerator = require("./src/page-template");

let hasManager = false;

const employeeArr = []
function init() {
    inquirer.prompt([
        {
            type: "list",
            name: "roleChoice",
            message: "Which Role are we Adding?",
            choices: hasManager ? ["Engineer", "Intern", "Done"] : ["Manager", "Engineer", "Intern", "Done"]
        }
    ]).then(roleResponse => {
        if (roleResponse.roleChoice != "Done") {
            inquirer.prompt([
                {
                    type: "input",
                    name: "name",
                    message: "What is your new Employee's name? "
                },
                {
                    name: "id",
                    message: "Enter their ID: "
                },
                {
                    name: "email",
                    message: "Enter their Email: "
                },
            ]).then(basicInfo => {
                if (roleResponse.roleChoice == "Manager") {
                    inquirer.prompt([
                        {
                            name: "office",
                            message: "Enter their Office Number:"
                        }
                    ]).then(managerRes => {
                        const manager = new Manager(basicInfo.name, basicInfo.id, basicInfo.email, managerRes.office)
                        employeeArr.push(manager)
                        hasManager = true
                        init()
                    })
                } else if (roleResponse.roleChoice == "Engineer") {
                    inquirer.prompt([
                        {
                            name: "github",
                            message: "Enter their Github Account:"
                        }
                    ]).then(engineerRes => {
                        const engineer = new Engineer(basicInfo.name, basicInfo.id, basicInfo.email, engineerRes.github)
                        employeeArr.push(engineer)
                        init()
                    })
                } else if (roleResponse.roleChoice == "Intern") {
                    inquirer.prompt([
                        {
                            name: "school",
                            message: "Enter their School Name:"
                        }
                    ]).then(internRes => {
                        const intern = new Intern(basicInfo.name, basicInfo.id, basicInfo.email, internRes.school)
                        employeeArr.push(intern)
                        init()
                    })
                }

            })
        } else {
            fs.writeFile("index.html", teamGenerator(employeeArr), err => {
                if (err) throw err;
            })
        }
    })
}

init();