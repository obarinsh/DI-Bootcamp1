

// Ex1 : Create a TypeScript program that logs the message “Hello, World!” to the console.
// let greeting: string
// greeting = "Hello,World"
// console.log(greeting)


// Ex2 :Define a variable age of type number and a variable name of type string, and log them to the console.
// let age: number = 2
// let name: string = "olga"

// console.log(name, age)

// Ex3: Use union types to declare a variable id that can be either a string or a number.

// type Id = string | number

// let myId: Id
// myId = 33
// console.log(myId)
// myId = 'random id'
// console.log(myId)

// Ex4: Write a function that takes a number as input and returns a
//  string indicating whether the number is positive, negative, or zero.
// Use if...else statements to control the flow of a program.

// const res = (a: number): string => {
//     if (a > 0) return 'positive'
//     else if (a < 0) return 'negative'
//     else return 'zero'
// }

// res(2)
// res(0)
// res(-3)

// Ex5: Create a function getDetails that takes a name and 
// age as input and returns a tuple containing the input values and a greeting message.
// The tuple should contain multiple values of different types

// type tuple = [string, number]
// const getDetails = (name: string, age: number): tuple => {

//     console.log(`Hello ${name}, you are ${age} years old`)
//     return [name, age]
// }

// getDetails('Olga', 11)

// Ex6: Define the Object Structure:
// Create an object type annotation that defines the shape of a Person object. The object should have two properties: name (a string) and age (a number).

// Create the Function:

// Write a function named createPerson that takes two parameters: name (string) and age (number).
// The function should return an object that matches the Person structure.

// Test the Function:

// Test the createPerson function by creating a person and logging the result to the console.


// type Person = {
//     name: string,
//     age: number
// }

// const createPerson = (name: string, age: number): object => {
//     let person: Person = {
//         name: name,
//         age: age
//     }
//     console.log(person)
//     return person
// }

// createPerson('olga', 32)

// Ex7: Get an Element from the DOM:
// Use document.getElementById() to retrieve an HTML element from the DOM.
// Use Type Assertion:
// Apply a type assertion to cast the element to a specific HTML element type, such as HTMLInputElement.

// Access the Element’s Properties:

// Once cast, use the properties of the specific element type, like setting the value of an input element.

// Test the Functionality:

// Ensure that you can successfully set or manipulate a property of the element.

// let input = document.getElementById('test') as HTMLInputElement
// input.value = "hello"
// console.log(input.value)

// Ex8: Create a function getAction that takes a string
//  representing a user role and returns an action for the user.
//   Use a switch statement with complex conditions to handle
//    multiple roles.

// const getAction = (userRole: string) => {
//     switch (userRole) {
//         case 'admin':
//             return 'Manage users and settings'
//         case 'editor':
//             return 'Edit content'
//         case 'viewer':
//             return 'View content'
//         case 'guest':
//             return 'Limited access'
//         case 'unknown':
//             return 'Invalid role'
//     }
// }


// console.log(getAction('admin'))
// console.log(getAction('editor'))
// console.log(getAction('viewer'))
// console.log(getAction('guest'))
// console.log(getAction('unknown'))


// Ex9:Create an overloaded function greet that can either
// take a name and greet the person, or take no arguments and 
// return a default greeting.

const greeting = (name: string, defaultGreet: string = 'Hello Stranger') => {
    if (name) return `Hello you, ${name}`
    else return defaultGreet
}

console.log(greeting('Olga'))
console.log(greeting())