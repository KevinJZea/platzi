CREATE TABLE IF NOT EXISTS clients (
    client_id INTEGER UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(60) NOT NULL UNIQUE,
    phone_number VARCHAR(15),
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS products (
    `product_id` INTEGER UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    slug VARCHAR(200) NOT NULL UNIQUE,
    description TEXT,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS bills (
    bill_id INTEGER UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    client_id INTEGER UNSIGNED NOT NULL,
    total FLOAT,
    status ENUM('open', 'paid', 'lost') NOT NULL DEFAULT 'open',
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (client_id) REFERENCES clients(client_id)
);

CREATE TABLE IF NOT EXISTS bill_products (
    bill_product_id INTEGER UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    bill_id INTEGER UNSIGNED NOT NULL,
    product_id INTEGER UNSIGNED NOT NULL,
    quantity INTEGER NOT NULL DEFAULT 1,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (bill_id) REFERENCES bills(bill_id)
      ON UPDATE CASCADE
      ON DELETE CASCADE,
    FOREIGN KEY (product_id) REFERENCES products(product_id)
      ON UPDATE CASCADE
      ON DELETE CASCADE
);

INSERT INTO clients (name, email) VALUES ('Kevs', 'k@mail.com');
INSERT INTO products (name, slug) VALUES ('Cuaderno', 'slug-cuaderno');
INSERT INTO bills (client_id, total) VALUES (1, 10.5);
INSERT INTO bill_products (bill_id, product_id) VALUES (1, 1);

CREATE TABLE IF NOT EXISTS test (
    test_id INTEGER UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    quantity INTEGER,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);
ALTER TABLE test ADD COLUMN price FLOAT;
ALTER TABLE test DROP COLUMN price;
ALTER TABLE test ADD COLUMN price FLOAT FIRST;
ALTER TABLE test ADD COLUMN price FLOAT AFTER quantity;
ALTER TABLE test MODIFY COLUMN price DECIMAL(10,3);

ALTER TABLE test RENAME COLUMN price TO prices;
ALTER TABLE test RENAME TO tests;

INSERT INTO products (name, slug) VALUES ('pluma azul', 'pluma-azul')
  ON DUPLICATE KEY UPDATE description = CONCAT('hola: ', VALUES(slug));


CREATE TABLE IF NOT EXISTS products (
    `product_id` INTEGER UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    sku VARCHAR(20) NOT NULL UNIQUE,
    name VARCHAR(100) NOT NULL,
    slug VARCHAR(200) NOT NULL UNIQUE,
    price DECIMAL(10,2),
    description TEXT,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
ALTER TABLE products ADD COLUMN price DOUBLE(10,2) AFTER slug;

SELECT email,
  CASE
    WHEN email LIKE '@gmail.com' THEN 'gmail'
    WHEN email LIKE '@hotmail.com' THEN 'hotmail'
    ELSE 'a different email provider'
  END AS provider
FROM clients ORDER BY RAND() LIMIT 30;

SELECT
  CASE
    WHEN email LIKE '%@gmail.com' THEN 'gmail'
    WHEN email LIKE '%@hotmail.com' THEN 'hotmail'
    ELSE 'a different email provider'
  END AS provider,
  COUNT(*) AS total_clients
FROM clients
WHERE name LIKE '%a'
GROUP BY total_clients
HAVING total_clients < 100
ORDER BY total_clients ASC;

SELECT p.product_id AS pid, p.name, p.price, i.investment,
  ROUND(i.investment / p.price) AS inv_calculated, stock
FROM investment AS i
LEFT JOIN products AS p
  ON p.product_id = i.product_id
WHERE investment > 100000 AND i.investment_id % 10 = 0;

