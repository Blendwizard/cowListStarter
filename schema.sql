-- YOUR CODE GOES HERE
-- CREATE YOUR DATABASE
-- CREATE YOUR TABLES
-- ADD RECORDS TO YOUR TABLE

DROP DATABASE IF EXISTS cow_database;
CREATE DATABASE cow_database;

USE cow_database;

CREATE TABLE cows_table (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  name TEXT,
  description TEXT
);

INSERT INTO cows_table VALUES (null, 'Bessy', 'A chonker of a cow');
-- mysql -u root < database/schema.sql