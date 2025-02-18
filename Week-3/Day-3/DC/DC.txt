-- Part I


-- Create 2 tables : Customer and Customer profile. They have a One to One relationship.
-- A customer can have only one profile, and a profile belongs to only one customer
-- The Customer table should have the columns : id, first_name, last_name NOT NULL
-- The Customer profile table should have the columns : id, isLoggedIn DEFAULT false (a Boolean), customer_id (a reference to the Customer table)

-- CREATE TABLE customer (
-- customer_id SERIAL PRIMARY KEY,
-- first_name VARCHAR(100),
-- last_name VARCHAR(200) NOT NULL
-- )
-- SELECT * FROM customer

-- CREATE TABLE customer_profile (
-- profile_id SERIAL PRIMARY KEY,
-- customer_id INT UNIQUE NOT NULL,
-- isLoggedIn BOOLEAN DEFAULT FALSE,
-- FOREIGN KEY (customer_id) REFERENCES customer(customer_id) ON DELETE CASCADE
-- )
-- SELECT * FROM customer_profile


-- Insert those customers

-- John, Doe
-- Jerome, Lalu
-- Lea, Rive

-- INSERT INTO customer(first_name ,last_name ) VALUES 
-- ('John','Doe'),
-- ('Jerome','Lalu'),
-- ('Lea','Rive')
-- SELECT * FROM customer

-- Insert those customer profiles, use subqueries
-- John is loggedIn
-- Jerome is not logged in

-- INSERT INTO customer_profile(customer_id,isLoggedIn) VALUES 
-- ((SELECT customer_id FROM customer WHERE first_name = 'John'), TRUE),
-- ((SELECT customer_id FROM customer WHERE first_name = 'Jerome'), FALSE);
-- SELECT * FROM customer_profile

-- Use the relevant types of Joins to display:

-- The first_name of the LoggedIn customers
-- SELECT customer.first_name, customer_profile.isloggedin
-- FROM customer
-- LEFT JOIN customer_profile ON customer.customer_id = customer_profile.customer_id
-- WHERE customer_profile.isLoggedIn = TRUE
-- LIMIT 1

-- All the customers first_name and isLoggedIn columns - even the customers those who don’t have a profile.

-- SELECT customer.first_name, customer_profile.isloggedin
-- FROM customer
-- LEFT JOIN customer_profile ON customer.customer_id = customer_profile.customer_id

-- The number of customers that are not LoggedIn
-- SELECT COUNT(*)
-- FROM customer
-- LEFT JOIN customer_profile ON customer.customer_id = customer_profile.customer_id
-- WHERE isLoggedIn=FALSE OR customer_profile.isLoggedIn IS NULL;



-- Part II:

-- Create a table named Book, with the columns : book_id SERIAL PRIMARY KEY, title NOT NULL, author NOT NULL
-- CREATE TABLE Book (
-- book_id SERIAL PRIMARY KEY,
-- title TEXT NOT NULL,
-- author TEXT NOT NULL)
-- SELECT * FROM Book

-- Insert those books :
-- Alice In Wonderland, Lewis Carroll
-- Harry Potter, J.K Rowling
-- To kill a mockingbird, Harper Lee

-- INSERT INTO Book(title,author) VALUES 
-- ('Alice In Wonderland', 'Lewis Carroll'),
-- ('Harry Potter', 'J.K Rowling'),
-- ('To kill a mockingbird', 'Harper Lee')
-- SELECT * FROM Book

-- Create a table named Student, with the columns : student_id SERIAL PRIMARY KEY, name NOT NULL UNIQUE, age. Make sure that the age is never bigger than 15 (Find an SQL method);

-- CREATE TABLE Student (
-- student_id SERIAL PRIMARY KEY,
-- name TEXT NOT NULL UNIQUE,
-- age INT CHECK (age <= 15))


-- Insert those students:
-- John, 12
-- Lera, 11
-- Patrick, 10
-- Bob, 14

-- INSERT INTO Student(name,age) VALUES 
-- ('John', 12),
-- ('Lera', 11),
-- ('Patrick', 10),
-- ('Bob', 14)

-- SELECT * FROM Student
-- SELECT * FROM Book

-- Create a table named Library, with the columns :

-- book_fk_id ON DELETE CASCADE ON UPDATE CASCADE
-- student_id ON DELETE CASCADE ON UPDATE CASCADE
-- borrowed_date
-- This table, is a junction table for a Many to Many relationship with the Book and Student tables : A student can borrow many books, and a book can be borrowed by many children
-- book_fk_id is a Foreign Key representing the column book_id from the Book table
-- student_fk_id is a Foreign Key representing the column student_id from the Student table
-- The pair of Foreign Keys is the Primary Key of the Junction Table

-- CREATE TABLE Library (
-- book_fk_id INT,
-- student_fk_id INT,
-- borrowed_date DATE NOT NULL,
-- PRIMARY KEY (book_fk_id, student_fk_id),  -- Composite Primary Key
-- FOREIGN KEY (book_fk_id) REFERENCES Book(book_id) ON DELETE CASCADE ON UPDATE CASCADE,
-- FOREIGN KEY (student_fk_id) REFERENCES Student(student_id) ON DELETE CASCADE ON UPDATE CASCADE
-- )

-- SELECT * FROM Library
-- Add 4 records in the junction table, use subqueries.
-- the student named John, borrowed the book Alice In Wonderland on the 15/02/2022
-- the student named Bob, borrowed the book To kill a mockingbird on the 03/03/2021
-- the student named Lera, borrowed the book Alice In Wonderland on the 23/05/2021
-- the student named Bob, borrowed the book Harry Potter the on 12/08/2021

-- INSERT INTO Library(student_fk_id,book_fk_id,borrowed_date) VALUES 
-- ((SELECT student_id FROM Student WHERE name = 'John'), (SELECT book_id FROM Book WHERE title = 'Alice In Wonderland'),'2022-02-15'),
-- ((SELECT student_id FROM Student WHERE name = 'Bob'), (SELECT book_id FROM Book WHERE title = 'To kill a mockingbird'),'2021-03-03'),
-- ((SELECT student_id FROM Student WHERE name = 'Lera'), (SELECT book_id FROM Book WHERE title = 'Alice In Wonderland'),'2021-05-23'),
-- ((SELECT student_id FROM Student WHERE name = 'Bob'), (SELECT book_id FROM Book WHERE title = 'Harry Potter'),'2021-08-12');
-- SELECT * FROM Library



-- Display the data
-- Select all the columns from the junction table
-- Select the name of the student and the title of the borrowed books
-- Select the average age of the children, that borrowed the book Alice in Wonderland
-- Delete a student from the Student table, what happened in the junction table ?
-- SELECT * FROM Library

-- SELECT 
--     Student.name AS student_name,
--     Book.title AS book_title,
--     Library.borrowed_date
-- FROM Library
-- LEFT JOIN Student ON Library.student_fk_id = Student.student_id
-- LEFT JOIN Book ON Library.book_fk_id = Book.book_id;

-- SELECT * FROM Library WHERE book_fk_id = (SELECT CAST(book_id AS INT) FROM Book WHERE title = 'Alice in Wonderland');
-- SELECT AVG(Student.age) AS average_age
-- FROM Student
-- JOIN Library ON Student.student_id = Library.student_fk_id
-- JOIN Book ON Library.book_fk_id = Book.book_id
-- WHERE Book.title = 'Alice In Wonderland';



-- DELETE FROM Student
-- WHERE student_id =1
____by mistake deleted all students :(((___
-- SELECT * FROM Student
-- SELECT * FROM Library
-- SELECT * FROM Book