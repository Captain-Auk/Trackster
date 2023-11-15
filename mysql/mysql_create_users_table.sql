CREATE DATABASE trakster_users;
USE trackster_users;
Create table users (
id integer PRIMARY KEY AUTO_INCREMENT,
username VARCHAR(255) NOT NULL,
first_name VARCHAR(255) NOT NULL,
last_name VARCHAR(255),
email VARCHAR(255) NOT NULL,
password VARCHAR (255) NOT NULL,
join_date TIMESTAMP NOT NULL DEFAULT NOW()
);