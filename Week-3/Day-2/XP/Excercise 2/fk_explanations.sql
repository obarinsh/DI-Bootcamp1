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

-- SELECT * FROM movies

-- EXERCISE:
-- CREATE TABLE producers (
-- producer_id SERIAL,
-- first_name VARCHAR (100) NOT NULL,
-- last_name VARCHAR (100) NOT NULL,
-- produced_movie_id INTEGER,
-- PRIMARY KEY (producer_id),
-- FOREIGN KEY (produced_movie_id) REFERENCES movies (movie_id)
-- )

-- INSERT INTO producers (first_name, last_name, produced_movie_id)
-- VALUES(
-- 'Lawrence', 'Bender',(SELECT movie_id FROM movies WHERE movie_title = 'Good Will Hunting')
-- )

SELECT * FROM producers