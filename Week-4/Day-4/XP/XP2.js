// Exercise 2 : Work with forms
// Instructions
// Copy the code below, into a structured HTML file:
// Retrieve the form and console.log it.
// let formEl = document.getElementsByTagName('form')
// console.log(formEl)

// Retrieve the inputs by their id and console.log them.
// let nameById = document.getElementById('fname')
// let lastNameById = document.getElementById('lname')
// console.log(nameById)
// console.log(lastNameById)

// Retrieve the inputs by their name attribute and console.log them.
// let firstName = document.getElementsByName("firstname")[0];
// let lastName = document.getElementsByName("lastname")[0];
// console.log(firstName)
// console.log(lastName)

// When the user submits the form (ie. submit event listener)
// let form = document.getElementsByTagName('form')[0]

// form.addEventListener("submit", function (event) {
//     event.preventDefault();
//     console.log("Form submitted!");
// });

// let form = document.querySelector('form')
// let userAnswer = document.querySelector(".usersAnswer");
// form.addEventListener("submit", function (event) {
//     event.preventDefault()
//     let li = document.createElement('li')
//     let inputName = form.querySelector("input[id='fname']").value;
//     let inputSurame = form.querySelector("input[id='lname']").value;
//     li.append(inputName, inputSurame)
//     userAnswer.appendChild(li)
//     form.reset()
// }

// )

// use event.preventDefault(), why ?
// get the values of the input tags,
// make sure that they are not empty,
// create an li per input value,
// then append them to a the <ul class="usersAnswer"></ul>, below the form.


// Exercise 3 : Transform the sentence
// Instructions

// In the JS file:

// Declare a global variable named allBoldItems.
let allBoldItems = []

// Create a function called getBoldItems() that takes no parameter. This function should collect all the bold items inside the paragraph and assign them to the allBoldItems variable.
getBoldItems()

function getBoldItems() {
    let bold = document.querySelectorAll('strong')
    allBoldItems = Array.from(bold);
    console.log(allBoldItems)
}

// Create a function called highlight() that changes the color of all the bold text to blue.

function highlight() {
    let bold = document.querySelectorAll('strong')
    allBoldItems = Array.from(bold);
    for (let i = 0; i < allBoldItems.length; i++) {
        allBoldItems[i].style.color = 'blue'
    }
}
// Create a function called returnItemsToDefault() that changes the color of all the bold text back to black.
function returnItemsToDefault() {
    let bold = document.querySelectorAll('strong')
    allBoldItems = Array.from(bold);
    for (let i = 0; i < allBoldItems.length; i++) {
        allBoldItems[i].style.color = 'black'
    }
}
// Call the function highlight() on mouseover 
// (ie. when the mouse pointer is moved onto the paragraph), 
// and the function returnItemsToDefault() on mouseout
// (ie. when the mouse pointer is moved out of the paragraph). 
// Look at this example
let p = document.getElementsByTagName('p')[0]
p.addEventListener("mouseover", function (event) {
    highlight()
})

p.addEventListener("mouseout", function (event) {
    returnItemsToDefault()
})
