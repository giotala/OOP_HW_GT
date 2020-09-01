const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

const employees = []

function runInquirer() {
    inquirer.prompt([{
        message: "Add team member's name.",
        name: "name"
    },
    {
        type: "list",
        message: "Add his/her role.",
        choices: [
            "Engineer",
            "Intern",
            "Manager"
        ],
        name: "role"
    },
    {
        message: "Add his/her ID.",
        name: "id"
    },
    {
        message: "Add his/her E-mail add.",
        name: "email"
    }
]).then(function({name, role, id, email}) {
    let roleInfo = "";
    if (role === "Engineer") {
        roleInfo = "GitHub username";
    } else if (role === "Intern") {
        roleInfo = "school name";
    } else {
        roleInfo = "office phone number";
    }
    return inquirer.prompt([{
        message: `Add team member's ${roleInfo}`,
        name: "roleInfo"
    },
    {
        type: "list",
        message: "add more members??",
        choices: [
            "yes",
            "no"
        ],
        name: "newMembers"
    }]).then(function({roleInfo, newMembers}){
        console.log(role)
        if (role === "Engineer") {
            let employee =new Engineer(name, id, email, roleInfo);
            employees.push(employee);
            console.log(employees)
        } else if (role === "Intern") {
            let employee =new Intern(name, id, email, roleInfo);
            employees.push(employee);
            console.log(employees)
        } else {
            let employee =new Manager(name, id, email, roleInfo);
            employees.push(employee);
            console.log(employees)
        }
        if (newMembers === "yes"){
        runInquirer();
        }
        else {
        const html = render (employees)
        fs.writeFile(outputPath, html, (err) => {
            if (err) throw err;
            console.log("Now, Get working!!!");
        })};
    })
})
}
runInquirer();