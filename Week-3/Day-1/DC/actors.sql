-- CREATE TABLE actors (
-- actor_id SERIAL PRIMARY KEY,
-- first_name VARCHAR(50) NOT NULL,
-- last_name VARCHAR(200) NOT NULL,
-- age DATE NOT NULL,
-- number_oscars SMALLINT NOT NULL)

-- SELECT * FROM actors
-- INSERT INTO actors (first_name, last_name, age, number_oscars)
-- VALUES
-- ('Matt','Damon', '08/10/1970', 5)
-- INSERT INTO actors (first_name, last_name, age, number_oscars)
-- VALUES
-- ('Emma','Stone','12/10/1989', 1),
-- ('Julia','Roberts','10/16/1975', 4),
-- ('Antonio','Banderas','12/09/1965', 2),
-- ('Meryl','Streep','09/09/1957', 3),
-- ('Marcus','Roth','11/02/1998', 1);

-- DELETE FROM actors WHERE actor_id = 2;
-- SELECT setval('actors_actor_id_seq', COALESCE((SELECT MAX(actor_id) FROM actors), 1));

-- SELECT * FROM actors
INSERT INTO actors(first_name, last_name, age, number_oscars)
VALUES ('','','',NULL)
-- SELECT * FROM actors

-- SELECT COUNT(*) FROM actors;
-- SELECT * FROM actors