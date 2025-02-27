// 🌟 Exercise 1 : Find the numbers divisible by 23
// Instructions
// Create a function call displayNumbersDivisible() that takes no parameter.

// In the function, loop through numbers 0 to 500.

// Console.log all the numbers divisible by 23.

// At the end, console.log the sum of all numbers that are divisible by 23.

// console.log(displayNumbersDivisible())
// function displayNumbersDivisible() {
//     let listOfNums = []
//     let sum = 0
//     for (i = 0; i <= 500; i++) {
//         if (i % 23 === 0) {
//             listOfNums.push(i)
//             sum += i
//         }
//     }
//     console.log(sum)
//     return listOfNums
// }

// Bonus: Add a parameter divisor to the function.
// displayNumbersDivisible(divisor)
// console.log(displayNumbersDivisible(4))
// function displayNumbersDivisible(divisor) {
//     let listOfNums = []
//     let sum = 0
//     for (i = 0; i <= 500; i++) {
//         if (i % divisor === 0) {
//             listOfNums.push(i)
//             sum += i
//         }
//     }
//     console.log(sum)
//     return listOfNums

// }
// Example:
// displayNumbersDivisible(3) : Console.log all the numbers divisible by 3, 
// and their sum
// displayNumbersDivisible(45) : Console.log all the numbers divisible by 45, 
// and their sum


// Exercise 2 : Shopping List
// Instructions
// const stock = {
//     "banana": 6,
//     "apple": 0,
//     "pear": 12,
//     "orange": 32,
//     "blueberry": 1
// }

// const prices = {
//     "banana": 4,
//     "apple": 2,
//     "pear": 1,
//     "orange": 1.5,
//     "blueberry": 10
// }
// Add the stock and prices objects to your js file.

// Create an array called shoppingList with the following items: “banana”, “orange”, and “apple”. It means that you have 1 banana, 1 orange and 1 apple in your cart.
// let shoppingList = ['banana', 'orange', 'apple']
// Create a function called myBill() that takes no parameters.

// console.log(myBill())

// function myBill() {
//     let totalPrice = 0
//     for (i = 0; i < shoppingList.length; i++) {
//         if (shoppingList[i] in stock > 0) {
//             let itemPrice = prices[shoppingList[i]]
//             console.log(`${shoppingList[i]} price is ${itemPrice}`)
//             totalPrice += itemPrice
//         }
//     }
//     return totalPrice
// }
// The function should return the total price of your shoppingList. In order to do this you must follow these rules:
// The item must be in stock. (Hint : check out if .. in)
// If the item is in stock find out the price in the prices object.

// Call the myBill() function.

// Bonus: If the item is in stock, decrease the item’s stock by 1
// console.log(myBill())

// function myBill() {
//     let totalPrice = 0
//     for (i = 0; i < shoppingList.length; i++) {
//         if (shoppingList[i] in stock > 0) {
//             stock[shoppingList[i]] += 1
//             let itemPrice = prices[shoppingList[i]]
//             console.log(`${shoppingList[i]} price is ${itemPrice}`)
//             totalPrice += itemPrice
//         }
//     }
//     console.log(stock)
//     return totalPrice
// }

// Exercise 3 : What’s in my wallet ?
// Instructions
// Note: Read the illustration (point 4), while reading the instructions

// Create a function named changeEnough(itemPrice, amountOfChange) that receives two arguments :
// an item price
// and an array representing the amount of change in your pocket.

// console.log(changeEnough(4.25, [25, 20, 5, 0]))
// console.log(changeEnough(14.11, [2, 100, 0, 0]))
// console.log(changeEnough(0.75, [0, 0, 20, 5]))

// function changeEnough(itemPrice, amountOfChange) {
//     let budget = 0
//     for (i = 0; i < amountOfChange.length; i++) {
//         budget += amountOfChange[i]

//         if (budget >= itemPrice) {
//             return true
//         } else if (budget <= itemPrice) {
//             return false
//         }
//     }
// }


// In the function, determine whether or not you can afford the item.
// If the sum of the change is bigger or equal than the item’s price (ie. it means that you can afford the item), the function should return true
// If the sum of the change is smaller than the item’s price (ie. it means that you cannot afford the item) the function should return false

// Change will always be represented in the following order: quarters, dimes, nickels, pennies.
// A quarters is 0.25
// A dimes is 0.10
// A nickel is 0.05
// A penny is 0.01


// 4. To illustrate:

// After you created the function, invoke it like this:

// changeEnough(4.25, [25, 20, 5, 0])
// The value 4.25 represents the item’s price
// The array [25, 20, 5, 0] represents 25 quarters, 20 dimes, 5 nickels and 0 pennies.
// The function should return true, since having 25 quarters, 20 dimes, 5 nickels and 0 pennies gives you 6.25 + 2 + .25 + 0 = 8.50 which is bigger than 4.25 (the total amount due)


// Examples

// changeEnough(14.11, [2,100,0,0]) => returns false
// changeEnough(0.75, [0,0,20,5]) => returns true


// Exercise 4 : Vacations Costs
// Instructions
// Let’s create functions that calculate your vacation’s costs:

// Define a function called hotelCost().
// It should ask the user for the number of nights they would like to stay in the hotel.
// If the user doesn’t answer or if the answer is not a number, ask again.
// The hotel costs $140 per night. The function should return the total price of the hotel.
// console.log(hotelCost())

// function hotelCost() {

//     while (true) {
//         amountOfNights = prompt('How many nights do you want to stay in the hotel?');

//         if (amountOfNights === null) {
//             alert("You canceled. Please enter a valid number.");
//             continue;
//         }
//         amountOfNights = Number(amountOfNights);
//         if (!isNaN(amountOfNights) && amountOfNights > 0) {
//             break;
//         }
//     }

//     totalPrice = amountOfNights * 140;
//     return totalPrice;
// }
// Define a function called planeRideCost().
// It should ask the user for their destination.
// If the user doesn’t answer or if the answer is not a string, ask again.
// The function should return a different price depending on the location.
// “London”: 183$
// “Paris” : 220$
// All other destination : 300$
// console.log(planeRideCost())
// function planeRideCost() {
//     while (true) {
//         let userDestination = prompt('Where do you wanna fly to?')
//         if (userDestination === null || !isString(userDestination) || userDestination.trim() === "") {
//             alert("Please enter a valid destination!");
//             continue;
//         }
//         userDestination = userDestination.trim().toLowerCase();
//         let cost = 0
//         if (userDestination === 'london') {
//             cost = 183
//         } else if (userDestination === 'paris') {
//             cost = 220
//         } else {
//             cost = 300
//         }

//         return cost
//     }
// }

// function isString(value) {
//     return typeof value === "string";
// }
// Define a function called rentalCarCost().
// It should ask the user for the number of days they would like to rent the car.
// If the user doesn’t answer or if the answer is not a number, ask again.
// Calculate the cost to rent the car. The car costs $40 everyday.
// If the user rents a car for more than 10 days, they get a 5% discount.
// The function should return the total price of the car rental.
// console.log(rentalCarCost())
// function rentalCarCost() {
//     while (true) {
//         amountOfDays = prompt('For how many days do you want to rent a car?');

//         if (amountOfDays === null) {
//             alert("You canceled. Please enter a valid number.");
//             continue;
//         }
//         amountOfDays = Number(amountOfDays);
//         if (!isNaN(amountOfDays) && amountOfDays > 0) {
//             if (amountOfDays >= 10) {
//                 totalPrice = (amountOfDays * 40) * 0.95

//             } else {
//                 totalPrice = amountOfDays * 40
//             }
//         }
//         return totalPrice;
//     }
// }
// totalVacationCost()
// function totalVacationCost() {
//     let hotel = hotelCost()
//     let plane = planeRideCost()
//     let car = rentalCarCost()
//     console.log(`The car cost: ${car}$, the hotel cost: ${hotel}$, the plane tickets cost:${plane}$.`)
// }

// Define a function called totalVacationCost() that returns the total cost of the user’s vacation by calling the 3 functions that you created above.
// Example : The car cost: $x, the hotel cost: $y, the plane tickets cost: $z.
// Hint: You have to call the functions hotelCost(), planeRideCost() and rentalCarCost() inside the function totalVacationCost().

// Call the function totalVacationCost()

// Bonus: Instead of using a prompt inside the 3 first functions, only use a prompt inside the totalVacationCost() function. You need to change the 3 first functions, accordingly

// 🌟 Exercise 5 : Users
// Instructions
// Create a new structured HTML file and a new Javascript file

// <div id="container">Users:</div>
// <ul class="list">
//     <li>John</li>
//     <li>Pete</li>
// </ul>
// <ul class="list">
//     <li>David</li>
//     <li>Sarah</li>
//     <li>Dan</li>
// </ul>


// Add the code above, to your HTML file

// Using Javascript:
// Retrieve the div and console.log it
// let divEl = document.getElementById("container").innerText
// console.log(divEl)


// Change the name “Pete” to “Richard”.
// let listElement = document.getElementsByClassName("list")[0]
// let neededName = listElement.children[1]
// neededName.innerText = "Richard";
// console.log(listElement.innerText)

// Delete the second <li> of the second <ul>.
// let listElement = document.getElementsByClassName("list")
// let firstEl = listElement[0]
// firstEl.removeChild(firstEl.children[1])
// let secondEl = listElement[1]
// secondEl.removeChild(secondEl.children[1])

// console.log(listElement.innerText)

// Change the name of the first <li> of each <ul> to your name. (Hint : use a loop)
// let listElement = document.getElementsByClassName("list")
// for (i = 0; i < listElement.length; i++) {
//     let liEl = listElement[i].children[0];
//     liEl.textContent = "Olga";
// }

// Using Javascript:

// Add a class called student_list to both of the <ul>'s.
// let listElement = document.getElementsByTagName("ul")
// let newClass = listElement.classList.add("student_list");
// console.log(listElement.className);

// Add the classes university and attendance to the first <ul>.
// let list = document.getElementsByTagName("ul")[0]
// list.classList.add("university")
// list.classList.add("attendance")
// console.log(list.className)

// Using Javascript:
// Add a “light blue” background color and some padding to the <div>.
// let divEl = document.getElementsByTagName("div")[0]
// divEl.style.backgroundColor = "lightblue"
// divEl.style.padding = "20px"

// Do not display the <li> that contains the text node “Dan”. (the last <li> of the first <ul>)
// let ulEl = document.getElementsByTagName("ul")[1]
// ulEl.lastElementChild.style.display = 'none'

// Add a border to the <li> that contains the text node “Richard”. (the second <li> of the <ul>)
// let listElement = document.getElementsByClassName("list")[0]
// let neededName = listElement.children[1]
// neededName.innerText = "Richard";
// neededName.style.border = '5px solid black'
// Change the font size of the whole body.
// let bodyEl = document.getElementsByTagName("body")[0]
// bodyEl.style.fontSize = '50px'
// Bonus: If the background color of the div is “light blue”, alert “Hello x and y” (x and y are the users in the div).

