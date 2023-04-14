const inquirer = require('inquirer');
const mysql = require('mysql2')
const cTable = require('console.table');



    quit: ,
}


const introRequest = () => {
    inquirer.prompt[
        {
            name: 'intro',
            message: 'What would you like to?',
            type: 'list',
            choices: [
                'View All Employees',
                'Add Employee',
                'Update Employee Role',
                'View All Roles',
                'Add Role',
                'View All Departments',
                'Add Department',
                'Quit'
            ]
        }
    ]
        .then((response) => {
            console.log(response);

            switch (response.intro) {
                case 'View All Employees':
                    viewEmployees();
                    break;

                case 'Add Employee':
                    newEmployee();
                    break;

                case 'Update Employee Role':
                    updateEmployeeRole();
                    break;

                case 'View All Roles':
                    viewRoles();
                    break;

                case 'Add Role':
                    addRole();
                    break;

                case 'View All Departments':
                    viewDepartments();
                    break;

                case 'Add Department':
                    addDepartment();
                    break;

                case 'Quit':
                    connection.end();
                    break;

                default:
                    break;
            }
        })
}

 async function viewEmployees() {
}

async function newEmployee() {
}

async function viewRoles() {
}
async function addRole() {
    inquirer.prompt([
        {
            name: 'roleAdd',
            message: 'What is the name of the role you want to add?',
            type: 'input'
        }
        ,
        {
            name: 'salary',
            message: 'What is the salary of the new role being added?',
            type: 'number'
        }
        ,
        {
            name: 'department',
            message: 'What is the department ID in which this new role be in?',
            type: 'list',
            choices: introList.viewAllDepartments
        }
    ]).then((response) => {
    ))
}

async function viewDepartments() {
}

async function addDepartment() {
}

async function updateEmployeeRole() {
    const employeeUpdate = await inquirer.prompt

    const roleUpdate = await inquirer.prompt([
        {
            name: 'employee',
            type: 'list',
            choices: '',
            message: 'Which employee\'s role do you want to update?'
        }
        ,
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