const express = require('express');
const inquirer = require('inquirer');
const mysql = require('/');

const app = express();



inquirer.prompt [
    {
        type: 'text',
        name: 'first name',
    }
    ,
    {
        type: 'text',
        name: 'last name',
    }
    ,
    {
        type: 'text',
        name: 'role',
    }
    ,
    {
        type: 'text',
        name: 'salary',
    }
    ,
    {
        type: 'text',
        name: 'department',
    }
    
];

[
    {
        type: 'list',
        choices: ['View All Employees', 'Add Employee', 'Update Employee Role', 'View All Roles'

    }
]
