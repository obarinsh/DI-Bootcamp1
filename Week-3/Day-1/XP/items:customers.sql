-- CREATE TABLE items(
-- item_id SERIAL PRIMARY KEY,
-- item_description VARCHAR(200) NOT NULL,
-- item_price SMALLINT NOT NULL)

-- SELECT * FROM items

-- CREATE TABLE customers(
-- customer_id SERIAL PRIMARY KEY,
-- customer_name VARCHAR(50) NOT NULL,
-- customer_surname VARCHAR(200) NOT NULL)

-- SELECT * FROM customers

-- INSERT INTO items (item_description, item_price)
-- VALUES
-- ('Small Desk', 100),
-- ('Large desk', 300),
-- ('Fan', 80);

-- SELECT * FROM items

-- INSERT INTO customers (customer_name, customer_surname)
-- VALUES
-- ('Greg','Jones'),
-- ('Sandra','Jones'),
-- ('Scott','Scott'),
-- ('Trevor','Green'),
-- ('Melanie','Johnson');

-- SELECT * FROM customers


-- All the items with a price above 80 (80 not included).
-- SELECT * FROM items WHERE item_price >80;
-- All the items with a price below 300. (300 included)
-- SELECT * FROM items WHERE item_price <=300;
-- All customers whose last name is ‘Smith’ (What will be your outcome?).
-- SELECT * FROM customers WHERE customer_surname='Smith';
-- All customers whose last name is ‘Jones’.
-- SELECT * FROM customers WHERE customer_surname='Jones';
-- All customers whose firstname is not ‘Scott’.
SELECT * FROM customers WHERE customer_name!='Scott';