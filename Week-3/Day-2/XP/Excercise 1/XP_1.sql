-- INSERT INTO items (item_id, item_description, item_price)
-- VALUES
-- ('4', 'Chair', '50'),
-- ('5', 'Bulb', '10'),
-- ('6', 'Notepad', '95');

-- SELECT * FROM items
-- 1.All items, ordered by price (lowest to highest).
-- SELECT * FROM items ORDER BY item_price ASC

-- 2.Items with a price above 80 (80 included), ordered by price (highest to lowest).
-- SELECT * FROM items WHERE item_price>=80 ORDER BY item_price DESC

-- 3.The first 3 customers in alphabetical order of the first name (A-Z) – exclude the primary key column from the results.
-- SELECT * FROM customers
-- SELECT customer_name,customer_surname FROM customers ORDER BY customer_name ASC
-- LIMIT 3

-- 4. All last names (no other columns!), in reverse alphabetical order (Z-A)
-- SELECT customer_surname FROM customers ORDER BY customer_surname DESC

