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
-- INSERT INTO actors(first_name, last_name, age, number_oscars)
-- VALUES ('','','',NULL)
-- SELECT * FROM actors

-- SELECT COUNT(*) FROM actors;
-- CREATE TABLE movies (
-- movie_id SERIAL,
-- movie_title VARCHAR (100) NOT NULL,
-- movie_story TEXT,
-- actor_playing_id INTEGER,
-- PRIMARY KEY (movie_id),
-- FOREIGN KEY (actor_playing_id) REFERENCES actors (actor_id)
-- )

-- THE TABLE WITH THE FK (FOREIGN KEY) IS THE CHILD
-- INSERTING DATA ON THE CHILD TABLE 

-- INSERT INTO movies (movie_title, movie_story, actor_playing_id)
-- VALUES
-- ('Good Will Hunting', 
--     'Written by Affleck and Damon, the film follows 20-year-old South Boston janitor Will Hunting',
-- (SELECT actor_id FROM actors WHERE first_name = 'Matt' AND last_name = 'Damon')),
--  ('Oceans Eleven', 
--     'American heist film directed by Steven Soderbergh and written by Ted Griffin.', 
-- (SELECT actor_id from actors WHERE first_name='Matt' AND last_name='Damon'));

-- CREATE TABLE movies (
-- movie_id SERIAL,
-- movie_title VARCHAR (100) NOT NULL,
-- movie_story TEXT,
-- actor_playing_id INTEGER,
-- PRIMARY KEY (movie_id),
-- FOREIGN KEY (actor_playing_id) REFERENCES actors (actor_id)
-- )

-- THE TABLE WITH THE FK (FOREIGN KEY) IS THE CHILD
-- INSERTING DATA ON THE CHILD TABLE 

-- INSERT INTO movies (movie_title, movie_story, actor_playing_id)
-- VALUES
-- ('Good Will Hunting', 
--     'Written by Affleck and Damon, the film follows 20-year-old South Boston janitor Will Hunting',
-- (SELECT actor_id FROM actors WHERE first_name = 'Matt' AND last_name = 'Damon')),
--  ('Oceans Eleven', 
--     'American heist film directed by Steven Soderbergh and written by Ted Griffin.', 
-- (SELECT actor_id from actors WHERE first_name='Matt' AND last_name='Damon'));

-- SELECT * FROM producers

-- CREATE TABLE producers (
-- producers_id SERIAL,
-- producers_name VARCHAR (100) NOT NULL,
-- producers_last_name VARCHAR (100) NOT NULL,
-- produced_movie_id INTEGER,
-- PRIMARY KEY (producers_id),
-- FOREIGN KEY (produced_movie_id) REFERENCES movies (movie_id)
-- )
-- INSERT INTO producers (producers_name, producers_last_name, produced_movie_id)
-- VALUES
-- ('Woody', 'Allen', (SELECT movie_id FROM movies WHERE movie_title = 'Good Will Hunting'));

