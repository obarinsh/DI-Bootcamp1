// Exercise 1 : Colors
// Instructions
// Using this array :

// const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];

// colors.forEach((color, index) => {
//     console.log(`${index + 1}# choise is ${color}`)
// })

// colors.some((color) => {
//     if (color === 'Violet') {
//         console.log('Yeah')
//     } else {
//         console.log('No....')
//     }
// })


// Write a JavaScript program that displays the colors in the following order : 
// “1# choice is Blue.” “2# choice is Green.” “3# choice is Red.” ect…
// Check if at least one element of the array is equal to the value “Violet”. If yes, 
// console.log("Yeah"), else console.log("No...")
// Hint : Use the array methods taught in class. Look at the lesson Array Methods.


// 🌟 Exercise 2 : Colors #2
// Instructions
// Using these arrays :

// const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];

// const ordinal = ["th", "st", "nd", "rd"];

// colors.forEach((color, i) => {
//     let ending = i + 1
//     let suffix = (ending % 10 === 1 && ending !== 11) ? "st" :
//         (ending % 10 === 2 && ending !== 12) ? "nd" :
//             (ending % 10 === 3 && ending !== 13) ? "rd" : "th";

//     console.log(`${ending}${suffix} choice is ${color}.`);
// });

// Write a JavaScript program that displays the colors in the following order : “1st choice is Blue .” “2nd choice is Green.” “3rd choice is Red.” ect…
// Hint : Use the array methods taught in class and ternary operator.


// Exercise 3 : Analyzing
// Instructions
// Analyze these pieces of code before executing them. What will be the outputs ?
// ------1------
// const fruits = ["apple", "orange"];
// const vegetables = ["carrot", "potato"];

// const result = ['bread', ...vegetables, 'chicken', ...fruits];
// console.log(result);
// Will print all var together in an array

// ------2------
// const country = "USA";
// console.log([...country]);
// ['U', 'S', 'A']
// ------Bonus------
// let newArray = [...[, ,]];
// console.log(newArray);


// 🌟 Exercise 4 : Employees
// Instructions
// Using this array:

const users = [{ firstName: 'Bradley', lastName: 'Bouley', role: 'Full Stack Resident' },
{ firstName: 'Chloe', lastName: 'Alnaji', role: 'Full Stack Resident' },
{ firstName: 'Jonathan', lastName: 'Baughn', role: 'Enterprise Instructor' },
{ firstName: 'Michael', lastName: 'Herman', role: 'Lead Instructor' },
{ firstName: 'Robert', lastName: 'Hajek', role: 'Full Stack Resident' },
{ firstName: 'Wes', lastName: 'Reid', role: 'Instructor' },
{ firstName: 'Zach', lastName: 'Klabunde', role: 'Instructor' }];
// // Using the map() method, push into a new array the firstname of the user and
// //  a welcome message. You should get an array that looks like this :
// // const welcomeStudents = ["Hello Bradley", "Hello Chloe", "Hello Jonathan",
// //  "Hello Michael", "Hello Robert", "Hello Wes", "Hello Zach"]
// const welcomeStudents = users.map(user => `Hello ${user.firstName}`)
// console.log(welcomeStudents)


// 2. Using the filter() method, create a new array, containing only the Full Stack Residents.
// const residents = users.filter(user => user.role === 'Full Stack Resident')
// console.log(residents)

// 3. Bonus : Chain the filter method with a map method, to return an array containing only the lastName of the Full Stack Residents.
// const fullStStudents = users
//     .filter(user => user.role === 'Full Stack Resident')
//     .map(user => user.lastName)
// console.log(fullStStudents)



// 🌟 Exercise 5 : Star Wars
// Instructions
// Using this array 
// const epic = ['a', 'long', 'time', 'ago', 'in a', 'galaxy', 'far far', 'away'];
// let starWars = epic.reduce((acc, space) => acc + ' ' + space)
// console.log(starWars)

// Use the reduce() method to combine all of these into a single string.


// 🌟 Exercise 6 : Employees #2
// Instructions
// Using this object:

const students = [{ name: "Ray", course: "Computer Science", isPassed: true },
{ name: "Liam", course: "Computer Science", isPassed: false },
{ name: "Jenner", course: "Information Technology", isPassed: true },
{ name: "Marco", course: "Robotics", isPassed: true },
{ name: "Kimberly", course: "Artificial Intelligence", isPassed: false },
{ name: "Jamie", course: "Big Data", isPassed: false }];
// Using the filter() method, create a new array, containing the students that passed the course.
// Bonus : Chain the filter method with a forEach method, to congratulate the students with their
//  name and course name (ie. “Good job Jenner, you passed the course in 
// Information Technology”, “Good Job Marco you passed the course in Robotics” ect…)

const passed = students
    .filter(student => student.isPassed === true)
console.log(passed)
passed.forEach(student => {
    console.log(`Good job ${student.name}, you passed the course in ${student.course}`)

})
