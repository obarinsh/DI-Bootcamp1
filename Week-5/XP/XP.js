// 🌟 Exercise 1 : Scope
// Instructions
// Analyse the code below, and predict what will be the value of a in all the following functions.
// Write your prediction as comments in a js file. Explain your predictions.
// #1
// function funcOne() {
//     const a = 5;
//     if (a > 1) {
//         a = 3
//     }
//     alert(`inside the funcOne function ${a}`)
// }

// // #1.1 - run in the console:
// funcOne()
// #1.2 What will happen if the variable is declared 
// with const instead of let ?
// Answer:Variables declared with const cannot be re-declared in the same scope

//#2
// const a = 0;
// function funcTwo() {
//     a = 5;
// }

// function funcThree() {
//     alert(`inside the funcThree function ${a}`);
// }

// // #2.1 - run in the console:
// funcThree()
// funcTwo()
// funcThree()
// #2.2 What will happen if the variable is declared 
// with const instead of let ?
// Answer: funcTwo() wont Worker, since we are trying reassign global var in local scope


// //#3
// function funcFour() {
//     window.a = "hello";
// }


// function funcFive() {
//     alert(`inside the funcFive function ${a}`);
// }

// // // #3.1 - run in the console:
// funcFour()
// funcFive()

// Answer: in funcFour() wont have anything since func doesnt return or print output, but funcFive will grab 
// the variable in funcFour
// //#4
// let a = 1;
// function funcSix() {
//     const a = "test";
//     alert(`inside the funcSix function ${a}`);
// }


// // #4.1 - run in the console:
// funcSix()
// // #4.2 What will happen if the variable is declared 
// // with const instead of let ?
// // Answer: it doesnt matter since its a local var, can use let or const

// //#5
// const a = 2;
// if (true) {
//     const a = 5;
//     alert(`in the if block ${a}`);
// }
// alert(`outside of the if block ${a}`);

// #5.1 - run the code in the console
// #5.2 What will happen if the variable is declared 
// with const instead of let ?
// Answer:both will work since both are block scoped

// 🌟 Exercise 2 : Ternary operator
// Instructions
// Using the code below:

// function winBattle() {
//     return true;
// }

// Transform the winBattle() function to an arrow function.
// const winBattle = () => true
// // Create a variable called experiencePoints.
// var experiencePoints = winBattle() ? 10 : 1
// console.log(experiencePoints)
// Assign to this variable, a ternary operator.
//  If winBattle() is true, the experiencePoints
//   variable should be equal to 10, else the
//    variable should be equal to 1.
// Console.log the experiencePoints variable.


// 🌟 Exercise 3 : Is it a string ?
// Instructions
// Write a JavaScript arrow function that checks whether 
// the value of the argument passed, is a string or not. 
// The function should return true or false
// Check out the example below to see the expected output
// Example:

// console.log(isString('hello')); 
//true
// console.log(isString([1, 2, 4, 0]));
//false

// function isString(value) {
//     if (typeof (value) === 'string') {
//         return true
//     } else {
//         return false
//     }
// }

// const isString = value => typeof (value) === 'string' ? true : false

// console.log(isString(123))
// console.log(isString('hello'))

// 🌟 Exercise 4 : Find the sum
// Instructions
// Create a one line function (ie. an arrow function)
//  that receives two numbers as parameters and returns the sum.

// const sum = (a, b) => a + b

// console.log(sum(2, 3))

// 🌟 Exercise 5 : Kg and grams
// Instructions
// Create a function that receives a weight in 
// kilograms and returns it in grams. (Hint: 1 kg is 1000gr)

// First, use function declaration and invoke it.
// console.log(convert(4))
// function convert(weightKg) {
//     let weightGrm = weightKg * 1000
//     return weightGrm
// }
// Then, use function expression and invoke it.
// const convert = function (weightKg) {
//     let weightGrm = weightKg * 1000
//     return weightGrm
// }
// console.log(convert(4))
// Write in a one line comment, the difference between
//  function declaration and function expression.
// Function declaration is hoisted and can be called before the function and stored memory during initial code scan to save place for this function.
// Function expression can be called after function only(not hoisted) and can be named or anonymus.

// Finally, use a one line arrow function and invoke it.
// const convert = (weightKg) => weightKg * 1000
// console.log(convert(8))

// 🌟 Exercise 6 : Fortune teller
// Instructions
// Create a self invoking function that takes 
// 4 arguments: number of children, partner’s name,
//  geographic location, job title.
// The function should display in the DOM a sentence like 
// "You will be a <job title> in <geographic location>, 
// and married to <partner's name> with <number of children> kids."

// (function (numOfChildren, prtnrName, location, jobTitle) {
//     console.log(`You will be a ${jobTitle} in ${location}, 
// and married to ${prtnrName} with ${numOfChildren} kids.`)
// })(4, 'Shushu', 'Canzas', 'ganan')

// 🌟 Exercise 7 : Welcome
// Instructions
// John has just signed in to your website and you want to
//  welcome him.

// Create a Navbar in your HTML file.
// In your js file, create a self invoking funtion that 
// takes 1 argument: the name of the user that just signed in.
// The function should add a div in the nabvar, displaying 
// the name of the user and his profile picture.
// (function (userName) {
//     let newDiv = document.createElement('div')
//     let navBar = document.getElementsByTagName('nav')[0]
//     navBar.appendChild(newDiv)
//     newDiv.innerText = userName
//     let profilePic = document.createElement("img");
//     profilePic.src = "alejandro.avif"
//     newDiv.appendChild(profilePic)
//     console.log(`User name:${userName}`)
// })('Alejandro')

// 🌟 Exercise 8 : Juice Bar
// Instructions
// You will use nested functions, to open a new juice bar.

// Part I:
// The outer function named makeJuice receives 1 argument: the size of the beverage the client wants - small, medium or large.
// function makeJuice(size) {
//     let ingredients = []
//     function addIngredients(firstIng, secIng, thirdIng) {
//         ingredients.push(firstIng, secIng, thirdIng)
//         console.log(`The client wants a ${size} juice, containing ${firstIng}, ${secIng}, ${thirdIng}
//             `)
//     }
//     function displayJuice() {
//         console.log(`The client wants a ${size} juice, containing ${ingredients}
//                 `)
//     }
//     addIngredients("mango", "banana", "kayle")
//     addIngredients("beet", "spinach", "orange")
//     displayJuice()
// }

// makeJuice("large")
// The inner function named addIngredients receives 3 ingredients, and displays on the DOM a sentence like The client wants a <size drink> juice, containing <first ingredient>, <second ingredient>, <third ingredient>".

// Invoke the inner function ONCE inside the outer function. Then invoke the outer function in the global scope.


// Part II:
// In the makeJuice function, create an empty array named ingredients.

// The addIngredients function should now receive 3 ingredients, and push them into the ingredients array.

// Create a new inner function named displayJuice that displays on the DOM a sentence like The client wants a <size drink> juice, containing <first ingredient>, <second ingredient>, <third ingredient>".

// The client wants 6 ingredients in his juice, therefore, invoke the addIngredients function TWICE. Then invoke once the displayJuice function. Finally, invoke the makeJuice function in the global scope.


