create database if not exists budget;

use budget;

create table if not exists Categories (
  id integer auto_increment primary key,
  name varchar(255) not null
);

create table if not exists Expenses (
  id integer auto_increment primary key,
  date date not null,
  description varchar(255),
  categoryId integer not null,
  accountName varchar(255),
  amount100 integer not null,

  constraint foreign key (categoryId) references Categories (id)
);

truncate table Expenses;
set foreign_key_checks = 0;
truncate table Categories;
set foreign_key_checks = 1;

insert into Categories (name) values ("Groceries");
insert into Categories (name) values ("Restaurants");
insert into Categories (name) values ("Mortgage & Rent");

insert into Expenses (date, description, categoryId, accountName, amount100)
values
  ("2019-01-01", "Skyba", 1, "Credit Card 1", 4900),
  ("2019-01-01", "Feedfish", 1, "Credit Card 1", 6080),
  ("2019-01-01", "Vinte", 2, "Credit Card 1", 1012),
  ("2019-01-01", "Buzzshare", 2, "Credit Card 1", 115000),
  ("2019-01-01", "Avaveo", 3, "Credit Card 1", 30300);