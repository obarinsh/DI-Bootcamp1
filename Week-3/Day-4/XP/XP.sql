CREATE TABLE Menu_Items(
    item_id SERIAL PRIMARY KEY,
    item_name VARCHAR(30) NOT NULL,
	item_price SMALLINT DEFAULT 0
)


-- INSERT INTO new_film (name) VALUES 
-- ('Amelie'),
-- ('Life is beautiful'),
-- ('Match Point'),
-- ('The Matrix');
-- SELECT * FROM new_film
-- DELETE FROM new_film
-- WHERE id IN (
--     SELECT id FROM new_film
--     ORDER BY id DESC
--     LIMIT 4
-- );