-- CREATE TABLE students (
-- student_id SERIAL PRIMARY KEY,
-- first_name VARCHAR(50) NOT NULL,
-- last_name VARCHAR(200) NOT NULL,
-- birth_date DATE NOT NULL)

-- SELECT * FROM students

-- INSERT INTO students (first_name, last_name, birth_date)
-- VALUES
-- ('Marc','Benichou','11/02/1998'),
-- ('Yoan','Cohen','12/03/2010'),
-- ('Lea','Benichou','07/27/1987'),
-- ('Amelia','Dux','04/07/1996'),
-- ('David','Grez','06/14/2003'),
-- ('Omer','Simpson','10/03/1980')

-- 2. Fetch all of the students first_names and last_names.
-- SELECT first_name,last_name FROM students

-- 3. For the following questions, only fetch the first_names and last_names of the students.
-- Fetch the student which id is equal to 2.
-- SELECT first_name,last_name FROM students WHERE student_id=2

-- 4.Fetch the student whose last_name is Benichou AND first_name is Marc.
-- SELECT first_name,last_name FROM students WHERE last_name='Benichou' AND first_name='Marc'

-- 5.Fetch the students whose last_names are Benichou OR first_names are Marc.
-- SELECT first_name,last_name FROM students WHERE last_name='Benichou' OR first_name='Marc'

-- 6.Fetch the students whose first_names contain the letter a.
-- SELECT first_name FROM students WHERE first_name ILIKE '%a%'

-- 7.Fetch the students whose first_names start with the letter a.
-- SELECT first_name FROM students WHERE first_name ILIKE 'a%'

-- 8.Fetch the students whose first_names end with the letter a.
-- SELECT first_name FROM students WHERE first_name ILIKE '%a'

-- 9.Fetch the students whose second to last letter of their first_names are a (Example: Leah).
-- SELECT first_name FROM students WHERE first_name ILIKE '%a_'

-- 10.Fetch the students whose id’s are equal to 1 AND 3 .
-- SELECT first_name,last_name FROM students WHERE student_id IN (1, 3)

-- 11.Fetch the students whose birth_dates are equal to or come after 1/01/2000. (show all their info).
-- SELECT * FROM students WHERE birth_date >= '2000-01-01';
-- SELECT * FROM students
-- 12.Fetch the first four students. You have to order the four students alphabetically by last_name.
-- SELECT first_name, last_name, birth_date FROM students WHERE student_id BETWEEN 1 AND 4 ORDER BY last_name ASC;
-- 13.Fetch the details of the youngest student.
-- SELECT first_name, last_name, birth_date FROM students ORDER BY birth_date DESC LIMIT 1
-- 14.Fetch three students skipping the first two students.
SELECT first_name, last_name, birth_date FROM students ORDER BY student_id ASC LIMIT 3 OFFSET 2;