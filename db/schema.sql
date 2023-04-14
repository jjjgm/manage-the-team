-- SQLBook: Code
DROP DATABASE IF EXISTS employee_tracker;
CREATE DATABASE employee_tracker;

USE employee_tracker;

CREATE TABLE department(
id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
name VARCHAR(30) NOT NULL
);

CREATE table role(
id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
title VARCHAR(30) NOT NULL,
salary DECIMAL,
department_id INT NOT NULL,
CONSTRAINT fk_department 
FOREIGN KEY (department_id) 
REFERENCES department(id) 
ON DELETE CASCADE
);

CREATE TABLE employee (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    role_id INT,
	manager_id INT,
    ON DELETE CASCADE,
    CONSTRAINT fk_manager FOREIGN KEY(manager_id) REFERENCES employee(id) 
    ON DELETE SET NULL
);




