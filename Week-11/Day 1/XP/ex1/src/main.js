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
var res = function (a) {
    if (a > 0)
        return 'positive';
    else if (a < 0)
        return 'negative';
    else
        return 'zero';
};
res(2);
res(0);
res(-3);
