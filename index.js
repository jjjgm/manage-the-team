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

async function viewDepartments() {
    db.query('SELECT * FROM department;', (err, res) => {
        console.table(res);
        introRequest();
    }
    )
}

async function viewEmployees() {
    db.query('SELECT * FROM employee', (err, data) => {
        console.table(data)
        introRequest();
    })
}

async function viewRoles() {
    db.query('SELECT * FROM role', (err, data) => {
        console.table(data);
        introRequest();
    })
}

async function addDepartment() {
    inquirer.prompt([
        {
            name: 'newDept',
            message: 'What department would you like to add?',
            type: 'input'
        }
    ]).then((response) => {
        db.query('INSERT INTO department (name) VALUES (?);', [response.newDept],
            (err, newDept) => {
                viewDepartments();
            });
    })
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

async function addRole() {
    db.query('SELECT id name FROM department;', (err, dept) => {
        inquirer.prompt([
            {
                name: 'title',
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
                name: 'deptChoice',
                message: 'What is the department will this new role be in?',
                type: 'list',
                choices: dept
            }
        ]).then((response) => {
            db.query(
                'INSERT INTO role SET ?',
                {
                    title: response.title,
                    salary: response.salary,
                    department_id: response.deptChoice
                },
                (err, res) => {
                    if (err) throw err;
                    console.log('You have added the role successfully');
                },
                viewRoles()
            );
        });
    }
    )
}

async function newEmployee() {
    db.query('SELECT title name, id value FROM role', (err, empRole) => {
        db.query('SELECT manager_id name FROM employee', (err, empManager) => {
            inquirer.prompt([
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
                ,
                {
                    name: 'role',
                    message: 'Please select employee\'s new role',
                    type: 'list',
                    choices: empRole
                }
                ,
                {
                    name: 'manager',
                    message: 'Please select the employee\'s manager',
                    type: 'list',
                    choices: empManager
                }
            ]).then((response) => {
                db.query('INSERT INTO employee SET ?',
                    {
                        first_name: response.firstname,
                        last_name: response.lastname,
                        role_id: response.role,
                        manager_id: response.manager
                    },
                    (err, res) => {
                        if (err) throw err;
                        console.log('You entered the new employee!');
                    })
                    viewEmployees()
            });
        });
    });
};



function quit() {
    prompt.close();
}


introRequest();