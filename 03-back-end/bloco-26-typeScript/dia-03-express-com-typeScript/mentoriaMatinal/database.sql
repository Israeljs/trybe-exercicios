DROP DATABASE IF EXISTS esquenta_trybesmith;

CREATE DATABASE esquenta_trybesmith;

USE esquenta_trybesmith;

CREATE TABLE users(
id INT PRIMARY KEY AUTO_INCREMENT,
name VARCHAR(50) NOT NULL,
age INT NOT NULL,
email VARCHAR(100) NOT NULL UNIQUE
);

INSERT INTO users (name, age, email)
VALUES ('Eric Kreis', 19, 'hojeÉAniversárioDele@deemParabéns.com'),
('Matheus Santos', 22, 'tipadorDeReduce@typescript.com'),
('Assis Meneghetti', 35, 'domadorDeGatos@meow.com');

CREATE TABLE addresses(
id INT PRIMARY KEY AUTO_INCREMENT,
userId INT NOT NULL,
address VARCHAR(50) NOT NULL,
city VARCHAR(30) NOT NULL,
state VARCHAR(30) NOT NULL,
country VARCHAR(30) NOT NULL,
FOREIGN KEY (userId) REFERENCES users (id)
);

INSERT INTO addresses(userId, address, city, state, country)
VALUES (1, 'Rua Nossa Senhora do Carmo, 252', 'Recife', 'Pernambuco', 'Brasil'),
(2, 'Rua Francisco Lopes Nogueira, 15', 'Vitória', 'Espirito Santo', 'Brasil'),
(3, 'Quadra SEPN 513', 'Brasilia', 'Distrito Federal', 'Brasil');

