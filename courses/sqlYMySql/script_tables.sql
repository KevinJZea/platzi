CREATE TABLE books IF NOT EXISTS (¬
    book_id INTEGER UNSIGNED PRIMARY KEY AUTO_INCREMENT,¬
    author_id INTEGER UNSIGNED,¬
    title VARCHAR(100) NOT NULL,¬
    year INTEGER UNSIGNED NOT NULL DEFAULT 1900,¬
    `language` VARCHAR(2) NOT NULL DEFAULT 'es' COMMENT 'ISO 639-1 Language',¬
    cover_url VARCHAR(500),¬
    price DOUBLE(6,2) NOT NULL DEFAULT 10.0,¬
    sellable TINYINT(1) DEFAULT 1,¬
    copies INTEGER NOT NULL DEFAULT 1,¬
    `description` TEXT,¬
);¬
¬
¬
CREATE TABLE IF NOT EXISTS authors (¬
    `author_id` INTEGER UNSIGNED PRIMARY KEY AUTO_INCREMENT,¬
    `name` VARCHAR(100) NOT NULL,¬
    nationality VARCHAR(3)¬
);



CREATE TABLE clients (
    client_id INTEGER UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    `name`VARCHAR(50) NOT NULL,
    `email`VARCHAR(100) NOT NULL UNIQUE,
    birthdate DATETIME,
    gender ENUM('M', 'F', 'ND') NOT NULL,
    active TINYINT(1) NOT NULL DEFAULT 1,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT 'yyyy-mm-dd hh:mm:ss',
    updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);



CREATE TABLE IF NOT EXISTS operations (
    `operation_id` INTEGER UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    `book_id` INTEGER UNSIGNED,
    `client_id` INTEGER UNSIGNED,
    `type` ENUM('S', 'L', 'R') NOT NULL COMMENT 'S=Sold, L=Loaned, R=Returned',
    `created_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT 'yyyy-mm-dd hh:mm:ss',
    `updated_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    `finished` TINYINT(1) NOT NULL COMMENT 'IF SOLD, 1; IF LOANED AND NOT RETURNED, 0; IF LOANED AND RETURNED, 1'
);



CREATE TABLE IF NOT EXISTS books (book_id INTEGER UNSIGNED PRIMARY KEY AUTO_INCREMENT, author_id INTEGER UNSIGNED, title VARCHAR(100) NOT NULL, year INTEGER UNSIGNED NOT NULL DEFAULT 1900, language VARCHAR(2) NOT NULL DEFAULT 'es' COMMENT 'ISO 639-1 Language', cover_url VARCHAR(500), price DOUBLE(6,2) NOT NULL DEFAULT 10.0, sellable TINYINT(1) DEFAULT 1, copies INTEGER NOT NULL DEFAULT 1, description TEXT);

CREATE TABLE IF NOT EXISTS authors (author_id INTEGER UNSIGNED PRIMARY KEY AUTO_INCREMENT, name VARCHAR(100) NOT NULL, nationality VARCHAR(3));

CREATE TABLE clients (client_id INTEGER UNSIGNED PRIMARY KEY AUTO_INCREMENT, `name`VARCHAR(50) NOT NULL, `email`VARCHAR(100) NOT NULL UNIQUE, birthdate DATETIME, gender ENUM('M', 'F', 'ND') NOT NULL, active TINYINT(1) NOT NULL DEFAULT 1, created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT 'yyyy-mm-dd hh:mm:ss', updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP);

CREATE TABLE IF NOT EXISTS operations (`operation_id` INTEGER UNSIGNED PRIMARY KEY AUTO_INCREMENT, `book_id` INTEGER UNSIGNED, `client_id` INTEGER UNSIGNED, `type` ENUM('S', 'L', 'R') NOT NULL COMMENT 'S=Sold, L=Loaned, R=Returned', `created_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT 'yyyy-mm-dd hh:mm:ss', `updated_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP, `finished` TINYINT(1) NOT NULL COMMENT 'IF SOLD, 1; IF LOANED AND NOT RETURNED, 0; IF LOANED AND RETURNED, 1');


------------------------------------
------------------------------------


INSERT INTO authors(name, nationality) VALUES('Juan Rulfo', 'MEX');

INSERT INTO authors(name, nationality) VALUES('Gabriel García Márquez', 'COL');

INSERT INTO authors(name, nationality) VALUES('Juan Gabriel Vasquez', 'COL');


------------------------------------
------------------------------------

-- Esto sí es pegable en la terminal
INSERT INTO books(title, author_id, `year`) VALUES('Vuelta al Laberinto de la Soledad',
(SELECT author_id FROM authors WHERE `name` = 'Octavio Paz' LIMIT 1), 1960
);


------------------------------------
------------------------------------

--- JOIN = INNER JOIN

SELECT b.book_id, a.name, a.author_id, b.title
FROM books AS b
JOIN authors AS a
ON a.author_id = b.author_id
WHERE a.author_id BETWEEN 1 AND 5


SELECT b.book_id, a.name, a.author_id, b.title
FROM books AS b
JOIN authors AS a
WHERE a.author_id BETWEEN 1 AND 5


SELECT c.name, b.title, a.name, t.type
FROM transactions AS t
JOIN books AS b
ON t.book_id = b.book_id
JOIN clients AS c
ON t.client_id = c.client_id
JOIN authors AS a
ON b.author_id = a.author_id
WHERE c.gender = 'F'
AND t.type = 'S'


------------------------------------
------------------------------------

--- LEFT JOIN

SELECT a.author_id , a.name, a.nationality, b.title
FROM authors AS a
JOIN books AS b
ON b.author_id = a.author_id
WHERE a.author_id BETWEEN 1 AND 5
ORDER BY a.author_id --desc


SELECT a.author_id , a.name, a.nationality, b.title
FROM authors AS a
LEFT JOIN books AS b
ON b.author_id = a.author_id
WHERE a.author_id BETWEEN 1 AND 5
ORDER BY a.author_id --desc


SELECT a.author_id , a.name, a.nationality, COUNT(b.book_id)
FROM authors AS a
JOIN books AS b
ON b.author_id = a.author_id
WHERE a.author_id BETWEEN 1 AND 5
GROUP BY a.author_id
ORDER BY a.author_id --desc


------------------------------------
------------------------------------

-- CASOS DE NEGOCIO

-- 1. ¿Qué nacionalidades hay?


SELECT nationality FROM authors --Trae todas las nacionalidades
GROUP BY nationality -- Agrupa todas las nacionalidades
ORDER BY nationality -- Ordena por orden alfanumérico

SELECT DISTINCT nationality FROM authors -- Trae todas las nacionalidades agrupadas
ORDER BY nationality -- Ordena por orden alfanumérico


-- 2. ¿Cuántos escritores hay de cada nacionalidad?


SELECT COUNT(`name`) AS 'Cantidad', nationality FROM authors
GROUP BY nationality
ORDER BY Cantidad DESC

SELECT nationality, COUNT(author_id) AS c_authors
FROM authors
WHERE nationality IS NOT NULL
AND nationality NOT IN('RUS')
GROUP BY nationality
ORDER BY c_authors DESC, nationality ASC



-- 3. ¿Cuántos libros hay de cada nacionalidad?

SELECT a.nationality, COUNT(b.book_id) AS 'Cantidad'
FROM books AS b
JOIN authors AS a
ON b.author_id = a.author_id
GROUP BY nationality
ORDER BY Cantidad DESC, nationality



-- ¿Cuál es el promedio/desviación estándar del precio de libros?


SELECT AVG(price) AS 'Average', STDDEV(price) AS 'Standard Deviation'
FROM books

SELECT a.nationality, COUNT(book_id) AS libros AVG(price) AS 'prom', STDDEV(price) AS 'std'
FROM books AS b
JOIN authors AS a
ON a.author_id = b.author_id
GROUP BY nationality
ORDER BY libros DESC


-- idem por nacionalidad



-- ¿Cuál es el precio máximo/mínimo de un libro?


SELECT title, price FROM books
ORDER BY price DESC

SELECT a.nationality, MAX(price), MIN(price)
FROM books AS b
JOIN authors AS a
ON a.author_id = b.author_id
GROUP BY nationality


-- ¿Cómo quedaría el reporte de préstamos?

SELECT c.name, t.type, b.title, CONCAT(a.name, " (", a.nationality, ")") AS 'autor',
TO_DAYS(NOW()) - TO_DAYS(t.created_at) AS 'ago'
FROM transactions AS t
LEFT JOIN clients AS c
ON c.client_id = t.client_id
LEFT JOIN books AS b
ON b.book_id = t.book_id
LEFT JOIN authors AS a
ON b.author_id = a.author_id


------------------------------------
------------------------------------


UPDATE authors
SET nationality = 'CHI'
WHERE author_id = 16
LIMIT 1


------------------------------------
------------------------------------


-- SUPER QUERYS

SELECT DISTINCT nationality FROM authors

SELECT COUNT(book_id) FROM books


SELECT SUM(price*copies) FROM books WHERE sellable = 1


SELECT COUNT(book_id), SUM(IF(year < 1950, 1, 0)) AS '<1950', `title`
FROM books
GROUP BY `title`


SELECT nationality, COUNT(book_id), 
  SUM(IF(year<1950, 1, 0)) AS '<1950',
  SUM(IF(year>=1950 AND year<1990, 1, 0)) AS '<1990',
  SUM(IF(year>=1990 AND year<2000, 1, 0)) AS '<2000',
  SUM(IF(year>=2000, 1, 0)) AS '<hoy'
FROM books AS b
JOIN authors AS a
ON a.author_id = b.author_id
WHERE a.nationality IS NOT NULL
GROUP BY nationality


