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
    role_id INT NOT NULL,
    CONSTRAINT fk_role FOREIGN KEY (role_id) REFERENCES role(id) ON DELETE CASCADE,
	manager_id INT,
    CONSTRAINT fk_manager FOREIGN KEY(manager_id) REFERENCES employee(id) 
    ON DELETE SET NULL
);

USE employee_tracker;

-- SQLBook: Code
INSERT INTO department (name)
VALUES 
("Engineering"),
("Finance"),
("Legal"),
("Sales");


INSERT INTO role(title, salary, department_id)
VALUES 
("Sales Lead",100000,4)
("Sales Person",80000,4)
("Lead Engineer",150000,1)
("Software Engineer",120000,1)
("Lead Engineer",125000,1)
("Account Manager",160000,2)
("Accountant",125000,2)
("Legal Team Lead",250000,3)
("Lawyer",190000,3);


INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES 
("John","Doe", 1, null)
("Mike", "Chan", 2, 1)
("Ashley", "Rodriguez", 3, null)
("Kevin", "Tupik", 4, 3)
("Kunal", "Singh", 5, null)
("Malia", "Brown", 6, 5)
("Sarah", "Lourd", 7, null)
("Tom", "Allen", 8, 7)
("Sam", "Kash", 9, 3);

