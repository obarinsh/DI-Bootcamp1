// 🌟 Exercise 1 : List of people
// Instructions
// const people = ["Greg", "Mary", "Devon", "James"];


// Part I - Review about arrays
// Write code to remove “Greg” from the people array.
// people.shift();
// console.log(people);

// Write code to replace “James” to “Jason”.
// people[3] = "Jason"
// console.log(people);

// Write code to add your name to the end of the people array.
// people.push('Olga')
// console.log(people)

// Write code that console.logs Mary’s index. take a look at the indexOf method on Google.
// var index = people.indexOf('Mary')
// console.log(index)

// Write code to make a copy of the people array using the slice method.
// let new_people = people.slice(0, people.lenght)
// console.log(new_people)

// The copy should NOT include “Mary” or your name.
// Hint: remember that now the people array should look like this const people = ["Mary", "Devon", "Jason", "Yourname"];
// Hint: Check out the documentation for the slice method
// let new_people = people.slice(1, people.lenght)
// console.log(new_people)

// Write code that gives the index of “Foo”. Why does it return -1 ?
// let word = "Foo"
// let index = word.indexOf()
// console.log(index)

// Create a variable called last which value is the last element of the array.
// Hint: What is the relationship between the index of the last element in the array and the length of the array?
// let list = ['a', 'b', 'c', 'd']
// let last = list[list.length - 1]
// console.log(last)

// Part II - Loops
// Using a loop, iterate through the people array and console.log each person.
// let humans = ["Tom", "Alonn", "Olga", "Aaron"];
// for (i = 0; i < humans.length; i++) {
//     console.log(humans[i])
// }
// Using a loop, iterate through the people array and exit the loop after you console.log “Devon” .
// Hint: take a look at the break statement in the lesson.
// let people = ["Greg", "Mary", "Devon", "James"];
// for (i = 0; i < people.length - 1; i++) {
//     console.log(people[i])

//         break    if (people[i] === 'Devon') {
//     }
// }


// 🌟 Exercise 2 : Your favorite colors
// Instructions
// Create an array called colors where the value is a list of your five favorite colors.
// Loop through the array and as you loop console.log a string like so: “My #1 choice is blue”, “My #2 choice is red” ect… .
// Bonus: Change it to console.log “My 1st choice”, “My 2nd choice”, “My 3rd choice”, picking the correct suffix for each number.
// Hint : create an array of suffixes to do the Bonus
// let colors = ['blue', 'green', 'pink', 'yellow', 'black']
// let suffixes = ['st', 'nd', 'rd', 'th', 'th']
// for (i = 0; i < colors.length; i++) {
//     // console.log(`My #${i + 1} choice is ${colors[i]}`)
//     console.log(`My ${i + 1}${suffixes[i]} choice is ${colors[i]}`)

// }


// 🌟 Exercise 3 : Repeat the question
// Instructions
// Prompt the user for a number.
// Hint : Check the data type you receive from the prompt (ie. Use the typeof method)
// While the number is smaller than 10 continue asking the user for a new number.
// Tip : Which while loop is more relevant for this situation?
// let number = prompt('Please enter your number:')
// console.log(typeof (number))

// while (number < 10) {
//     number = prompt('Please enter your number:')
// }

// 🌟 Exercise 4 : Building Management
// Instructions:
// const building = {
//     numberOfFloors: 4,
//     numberOfAptByFloor: {
//         firstFloor: 3,
//         secondFloor: 4,
//         thirdFloor: 9,
//         fourthFloor: 2,
//     },
//     nameOfTenants: ["Sarah", "Dan", "David"],
//     nameOfTenants: {
//         sarah: [3, 990],
//         dan: [4, 1000],
//         david: [1, 500],
//     },
// }

// Review about objects
// Copy and paste the above object to your Javascript file.

// Console.log the number of floors in the building.
// console.log(building.numberOfFloors)

// Console.log how many apartments are on the floors 1 and 3.
// console.log(building.numberOfAptByFloor.firstFloor)
// console.log(building.numberOfAptByFloor.thirdFloor)

// Console.log the name of the second tenant and the number of rooms he has in his apartment.
// console.log(building.nameOfTenants.dan[0])

// Check if the sum of Sarah’s and David’s rent is bigger than Dan’s rent. If it is, than increase Dan’s rent to 1200.
// let saraRent = building.nameOfTenants.sarah[1]
// let danRent = building.nameOfTenants.dan[1]
// let davidRent = building.nameOfTenants.david[1]
// if (saraRent + davidRent > danRent) {
//     danRent = 1200
//     console.log(danRent)
// }


// 🌟 Exercise 5 : Family
// Instructions
// Create an object called family with a few key value pairs.
// Using a for in loop, console.log the keys of the object.
// Using a for in loop, console.log the values of the object.


// let family = {
//     memebers: ['mother', 'father', 'son'],
//     ages: [44, 45, 12],
//     names: ['Mike', "Rubi", "Oliver"]
// }
// for (let key in family) {
//     console.log(`${key}`)
//     console.log(`${family[key]}`)
// }

// Exercise 6 : Rudolf
// Instructions
// const details = {
//     my: 'name',
//     is: 'Rudolf',
//     the: 'reindeer'
// }
// Given the object above and using a for loop, console.log “my name is Rudolf the reindeer”

// console.log(`${Object.keys(details)[0]} ${details.my} ${Object.keys(details)[1]} ${details.is} ${Object.keys(details)[2]} ${details.the}`);

// Exercise 7 : Secret Group
// Instructions
const names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];
// A group of friends have decided to start a secret society. The society’s name will be the first letter of each of their names sorted in alphabetical order.
// Hint: a string is an array of letters
// Console.log the name of their secret society. The output should be “ABJKPS”

let secretSociety = []
for (i = 0; i < names.length; i++) {
    let personName = names[i]
    let firstLetter = personName[0]

    secretSociety.push(firstLetter)
}
secretSociety.sort()
let societyName = secretSociety.join("")
console.log(societyName)