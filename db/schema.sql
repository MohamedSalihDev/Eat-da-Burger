DROP DATABASE IF EXISTS burgers_db;
CREATE database burgers_db;

USE burgers_db;

CREATE TABLE burgers (
  id integer auto_increment,
  burger_name VARCHAR(30),
  devoured boolean default false,
PRIMARY KEY (id)
);