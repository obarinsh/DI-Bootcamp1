-- JOINS IN SQL

-- INNER JOIN: IT TAKES ALL THE ROWS THAT MATCH FROM BOTH TABLES

-- INSERT INTO movies (movie_title, movie_story, actor_playing_id)
-- VALUES
-- ('Harry Potter and Philosopher`s Stone', 
--     'Harry Potter and the Philosopher`s Stone is an enthralling start to Harry`s journey toward coming to terms with his past and facing his future.',
-- NULL),

-- SELECT actors.first_name, actors.last_name, movies.movie_title
-- FROM actors
-- INNER JOIN movies
-- ON actors.actor_id = movies.actor_playing_id

-- HOW TO CREATE A TABLE THAT IS THE RESULT OF A JOIN (USE ALIAS)
-- CREATE TABLE movie_actors AS
-- SELECT actors.first_name, actors.last_name, movies.movie_title
-- FROM actors
-- INNER JOIN movies
-- ON actors.actor_id = movies.actor_playing_id

-- EXERCISE
-- SELECT pd.first_name, pd.last_name, mv.movie_title
-- FROM producers AS pd
-- INNER JOIN movies AS mv
-- ON pd.producer_id = mv.movie_id

-- LEFT JOIN: ALL FROM THE LEFT TABLE
-- SELECT actors.first_name, actors.last_name, movies.movie_title
-- FROM actors
-- LEFT JOIN movies
-- ON actors.actor_id = movies.actor_playing_id

-- LEFT JOIN: ALL FROM THE RIGHT TABLE
-- SELECT actors.first_name, actors.last_name, movies.movie_title
-- FROM actors
-- RIGHT JOIN movies
-- ON actors.actor_id = movies.actor_playing_id

-- FULL JOIN: ALL FROM BOTH TABLES
-- SELECT actors.first_name, actors.last_name, movies.movie_title
-- FROM movies
-- FULL JOIN actors
-- ON actors.actor_id = movies.actor_playing_id

-- EXERCISE
-- CREATE TABLE countries (
-- country_id SERIAL PRIMARY KEY,
-- country_name VARCHAR(100))

-- INSERT INTO countries (country_name)
-- VALUES('USA'),('Israel'), ('Brazil'), ('Canada')

-- SELECT * FROM countries

-- SELECT * FROM actors

-- SELECT countries.country_name, actors.first_name
-- FROM countries
-- JOIN actors
-- ON actors.actor_id = countries.country_id

-- SELECT countries.country_name, actors.first_name
-- FROM countries
-- FULL JOIN actors
-- ON actors.actor_id = countries.country_id



