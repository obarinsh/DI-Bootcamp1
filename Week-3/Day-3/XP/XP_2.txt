-- 1.Get a list of all the languages, from the language table.
-- SELECT language_id,name FROM language

-- 2.Get a list of all films joined with their languages – select the following details : film title, description, and language name.
-- SELECT f.title,f.description,f.language_id,l.name
-- FROM film AS f
-- LEFT JOIN language AS l ON f.language_id = l.language_id

-- 3.Get all languages, even if there are no films in those languages – select the following details : film title, description, and language name.
-- SELECT f.title,f.description,f.language_id,l.name
-- FROM film AS f
-- RIGHT JOIN language AS l ON f.language_id = l.language_id

-- 4.Create a new table called new_film with the following columns : id, name. Add some new films to the table.
-- CREATE TABLE new_film (
--     id SERIAL PRIMARY KEY,
--     name VARCHAR(100) NOT NULL
-- );
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

-- 5.Create a new table called customer_review, which will contain film reviews that customers will make.
-- Think about the DELETE constraint: if a film is deleted, its review should be automatically deleted.
-- It should have the following columns:
-- review_id – a primary key, non null, auto-increment.
-- film_id – references the new_film table. The film that is being reviewed.
-- language_id – references the language table. What language the review is in.
-- title – the title of the review.
-- score – the rating of the review (1-10).
-- review_text – the text of the review. No limit on the length.
-- last_update – when the review was last updated.

-- CREATE TABLE customer_review (
--     review_id SERIAL PRIMARY KEY,
-- 	film_id SMALLINT NOT NULL,
-- 	language_id SMALLINT NOT NULL,
-- 	title VARCHAR(50),
-- 	score SMALLINT,
--     review_text TEXT NOT NULL,
-- 	last_update TIMESTAMP WITHOUT TIME ZONE DEFAULT NOW() NOT NULL,

-- 	FOREIGN KEY (film_id) REFERENCES new_film(id) ON DELETE CASCADE,
--     FOREIGN KEY (language_id) REFERENCES language(language_id) ON DELETE CASCADE
-- );

-- SELECT * FROM customer_review 

-- 6. Add 2 movie reviews. Make sure you link them to valid objects in the other tables.
-- INSERT INTO customer_review (film_id,language_id,title,score,review_text)
-- VALUES
-- (12,4, 'Another boring movie', 3,'This is one of the most boring stuff i ever saw');
-- SELECT * FROM customer_review 
-- INSERT INTO customer_review (film_id,language_id,title,score,review_text)
-- VALUES
-- (11,3, 'Amazing', 3,'If you want to spend evening and not being dissappointed, this is your choice');
-- SELECT * FROM customer_review 

-- 7.Delete a film that has a review from the new_film table, what happens to the customer_review table?
-- SELECT * FROM new_film
-- SELECT * FROM customer_review
-- DELETE FROM new_film WHERE id=12


-- EXERCISE2:

-- 1.Use UPDATE to change the language of some films. Make sure that you use valid languages.
-- SELECT * FROM film
-- UPDATE film
-- SET language_id = 3
-- WHERE film_id = 133;

-- 2.Which foreign keys (references) are defined for the customer table? How does this affect the way in which we INSERT into the customer table?
-- last_update,addres_id
-- While inserting new row in this table, last_update and address_id need to be provided from child tables(payment,address)

-- 3.We created a new table called customer_review. Drop this table. Is this an easy step, or does it need extra checking?
-- -we can delete table completely :DROP TABLE customer_review;
-- -in this case we have dependent foreign keys to other table, so we can remove it: DROP TABLE customer_review CASCADE;
-- -or delete only data from the table: DELETE FROM customer_review;

-- 4.Find out how many rentals are still outstanding (ie. have not been returned to the store yet).
-- SELECT * FROM rental
-- SELECT COUNT(*) FROM rental WHERE return_date IS NULL; 
-- =183

-- 5.Find the 30 most expensive movies which are outstanding (ie. have not been returned to the store yet)
-- SELECT film.film_id, film.title, payment.amount
-- FROM rental 
-- LEFT JOIN inventory ON rental.inventory_id = inventory.inventory_id
-- LEFT JOIN film ON inventory.film_id = film.film_id
-- LEFT JOIN payment ON rental.rental_id = payment.rental_id
-- WHERE return_date IS NULL
-- ORDER BY payment.amount DESC
-- LIMIT 30;


-- 6.Your friend is at the store, and decides to rent a movie. He knows he wants to see 4 movies, but he can’t remember their names. Can you help him find which movies he wants to rent?
-- The 1st film : The film is about a sumo wrestler, and one of the actors is Penelope Monroe.
-- SELECT actor.first_name,actor.last_name,film.description,film.title
-- FROM film
-- LEFT JOIN film_actor ON film_actor.film_id=film.film_id
-- LEFT JOIN actor ON film_actor.actor_id=actor.actor_id
-- WHERE film.description ILIKE '%sumo wrestler%'
-- AND actor.first_name='Penelope' 
-- AND actor.last_name='Monroe'

--The 2nd film : A short documentary (less than 1 hour long), rated “R”.
-- SELECT film.title,category.name,film.length,film.rating
-- FROM film
-- LEFT JOIN film_category ON film_category.film_id=film.film_id
-- LEFT JOIN category ON film_category.category_id=category.category_id
-- WHERE film.length<=60
-- AND category.name='Documentary'
-- AND film.rating='R'

-- The 3rd film : A film that his friend Matthew Mahan rented. He paid over $4.00 for the rental, and he returned it between the 28th of July and the 1st of August, 2005.
-- SELECT film.title,customer.first_name,customer.last_name,payment.amount,rental.return_date
-- FROM film
-- LEFT JOIN inventory ON film.film_id=inventory.film_id
-- LEFT JOIN rental ON inventory.inventory_id=rental.inventory_id
-- LEFT JOIN customer ON rental.customer_id=customer.customer_id
-- LEFT JOIN payment ON rental.rental_id = payment.rental_id 
-- WHERE customer.first_name='Matthew' 
-- AND customer.last_name='Mahan'
-- AND payment.amount>4
-- AND rental.return_date BETWEEN '2005-07-28' AND '2005-08-01'

-- The 4th film : His friend Matthew Mahan watched this film, as well. It had the word “boat” in the title or description, and it looked like it was a very expensive DVD to replace.
-- SELECT film.title,film.description,customer.first_name,customer.last_name,film.replacement_cost
-- FROM film
-- LEFT JOIN inventory ON film.film_id=inventory.film_id
-- LEFT JOIN rental ON inventory.inventory_id=rental.inventory_id
-- LEFT JOIN customer ON rental.customer_id=customer.customer_id
-- WHERE customer.first_name='Matthew' 
-- AND customer.last_name='Mahan'
-- AND (film.title ILIKE '%boat%' OR film.description ILIKE '%boat%')
-- ORDER BY film.replacement_cost DESC
-- LIMIT 1