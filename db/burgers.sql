CREATE DATABASE burgers
USE burgers

CREATE TABLE burgersEaten(
    id INT NOT NULL AUTO_INCREMENT,
    innerText VARCHAR(100) NOT NULL,
    PRIMARY KEY(id)
)


CREATE TABLE burgersToEat(
    id INT NOT NULL AUTO_INCREMENT,
    innerText VARCHAR(100) NOT NULL,
    PRIMARY KEY(id) 
)


INSERT INTO burgersEaten (innerText) VALUES ("Super Mega Cheeseburger")

INSERT INTO burgersToEat (innerText) VALUES ("Texas BBQ Burger")
