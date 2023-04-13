const inquirer = require('inquirer');
const mysql = require('mysql2')
const cTable = require('console.table');


    inquirer.prompt[
        {
        message:'What would you like to?',
        type: 'list',
        choices: ['View All Employees', 'Add Employee', 'Update Employee Role', 'View All Roles',  'Add Role', 'View All Departments', 'Add Department', 'Quit']
    }
]

imquirer.prompt
[
    {
        role:'What is the name of the role?',
        type: 'input',
        name: 'role',
    }
    ,
    {
        salary:'What is the salary of the role?',
        type: 'number',
        name: 'salary',
    }
    ,
    {
        department:'What is the name of the department?',
        type: 'input',
        name: 'department',
    }
    ,
    {
        department:'Which department does the role belong to?',
        type: 'list',
        choices: ['Engineering','Finance','Legal','Sales','Service']
    }
    ,
    {
        firstName: 'What is the employees first name?',
        type: 'input',
        name: 'first name',
    }
    ,
    {
        LastName: 'What is the employees last name?',
        type: 'input',
        name: 'last name',
    }
    ,
    {
        role:'What is the employees role?',
        type: 'input',
        name: 'role',
    }
    ,
    {
        manager:'Whos is the employees manager?',
        type: 'list',
        choices: ['',]
    }
    ,
    {
        assignment: 'Which role do you want to assign the assign the selected employee?',
        type: 'list',
        choices: ['Sales Lead','Salesperson','Lead Engineer','Software Engineer','Account Manager', 'Accountant','Legal Team Lead']
    }
];

