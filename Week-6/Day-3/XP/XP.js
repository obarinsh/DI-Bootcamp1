// 🌟 Exercise 1 : Comparison
// Instructions
// Create a function called compareToTen(num) that takes a 
// number as an argument.


// function compareToTen(num) {
//     return new Promise(function (resolve, reject) {
//         if (num <= 10) {
//             resolve("Number is less than or equal to 10");
//         } else {
//             reject("Number is greater than 10");
//         }
//     });
// }


// compareToTen(8)
//     .then(result => console.log(result))
//     .catch(error => console.log(error))
// The function should return a Promise:
// the promise resolves if the argument is less than or equal to 10
// the promise rejects if argument is greater than 10.
// Test:

// //In the example, the promise should reject
// compareToTen(15)
//     .then(result => console.log(result))
//     .catch(error => console.log(error))

// //In the example, the promise should resolve
// compareToTen(8)
//     .then(result => console.log(result))
//     .catch(error => console.log(error))


// 🌟 Exercise 2 : Promises
// Instructions
// Create a promise that resolves itself in 4 seconds and 
// returns a “success” string.

// let promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log("Success!");
//         resolve();
//     }, 4000)
// })


// 🌟 Exercise 3 : Resolve & Reject
// Instructions
// Use Promise.resolve(value) to create a promise that will resolve
//  itself with a value of 3.
// Use Promise.reject(error) to create a promise that will reject 
// itself with the string “Boo!”


Promise.resolve(3)
    .then(value => console.log(value))

Promise.reject("Boo!")
    .catch(error => console.log(error))

// Exercise 4: quizz - not mandatory
// Follow this tutorial and do the quizz until the page called
//  “a few tricks with promises”.

