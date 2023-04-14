const inquirer = require('inquirer');
const mysql = require('mysql2')
const cTable = require('console.table');

const introList = {
    viewAllEmployees: "View All Employees",
    addEmployee: "Add Employee", 
    updateEmployeeRole: "Update Employee Role",
    viewAllRoles: "View All Roles", 
    addRole: "Add Role", 
    viewAllDepartments: "View All Departments", 
    addDepartment: "Add Department",
    quit: "Quit",
}



const introRequest = () => {
inquirer.prompt[
    {
    name:'intro',
    message:'What would you like to?',
    type: 'list',
    choices: [ 
        introList.viewAllEmployees,
        introList.addDepartment,
        introList.updateEmployeeRole,
        introList.viewAllRoles,
        introList.addRole,
        introList.viewAllDepartments,
        introList.addDepartment,
        introList.quit
    ]
}
]
.then ((answer) => {
    console.log(answer);

    switch(answer.intro) {
        case introList.viewAllEmployees:
            viewEmployees();
        break;

        case introList.addDepartment:
            newEmployee();
        break;

        case introList.updateEmployeeRole:
            updateEmployeeRole();
        break;

        case introList.viewAllRoles:
            viewRoles();
        break;

        case introList.addRole:
            addRole();
        break;

        case introList.viewAllDepartments:
            viewDepartments();
        break;

        case introList.addDepartment:
            addDepartment();
        break;

        case introList.quit:
            connection.end();
        break;

        default:
        break;
    }
})
}

function viewEmployees() {
}

function newEmployee () {
}

function viewRoles() {
}
function addRole() {

}

function viewDepartments() {
}

async function addDepartment() {
}

async function updateEmployeeRole() {
 const employeeId = await inquirer.prompt(askEmployeeId());

 const { role } = await inquirer.prompt([
    {
    name: 'role',
    type: 'list',
    choices: '',
    message: 'Which role do you want to assign the selected employee?: '
    }
 ])
}

function quit() {

}


//         firstName: 'What is the employees first name?',
//         type: 'input',
//         name: 'first name',
//     }
//     ,
//     {
//         LastName: 'What is the employees last name?',
//         type: 'input',
//         name: 'last name',
//     }







introRequest();