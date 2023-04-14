const inquirer = require('inquirer');
const mysql = require('mysql2')
const cTable = require('console.table');

const db = mysql.createConnection(
    {
        host: 'localhost',
        port: 3306,
        user: 'root',
        password: 'Sqlpass@',
        database: 'employee_tracker'
    });


const introRequest = () => {
    inquirer.prompt([
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
    ]).then((response) => {
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
    db.query('SELECT * FROM employee',(err,data)=>{
        console.table(data)
        introRequest();
    })
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
            choices: [connection.query('SELECT * FROM department')]
        }
    ]).then((response) => {
        connection.query(
            'UPDATE employee SET role_id=? WHERE id=?',
            //update id for the role and update employee id accordingly
            (err, response) => {
                if (err) throw err;
                console.log('You have updated their role successfully');
            }
        );
    });
}

async function viewDepartments() {
    db.query('SELECT * FROM department;', (err, res) => {
        console.table(res);
        introRequest();
    }
    )
}

async function addDepartment() {
    connection.query()
}

async function updateEmployeeRole() {
    db.query('SELECT concat(first_name," ", last_name) name FROM employee', (err, employeeData) => {
        db.query('SELECT title name, id value FROM role', (err, roleData) => {
            inquirer.prompt([
                {
                    name: 'employee',
                    type: 'list',
                    choices: employeeData,
                    message: 'Which employee\'s role do you want to update?'
                }
                ,
                {
                    name: 'role',
                    type: 'list',
                    choices: roleData,
                    message: 'Which role do you want to assign the selected employee?: '
                }
            ]).then((response) => {
                db.query('update employee set role_id=? where id=?', [response.role, response.employee], (err, roleData) => {
                    viewEmployees()
                })
            })
        })
    })
}


function getName() {
    ([
        {
            name: 'firstname',
            message: 'Please enter employee\'s first name',
            type: 'input'
        }
        ,
        {
            name: 'lastname',
            message: 'Please enter employee\'s last name',
            type: 'input'
        }
    ])
}

function quit() {

}


introRequest();