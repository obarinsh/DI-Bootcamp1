// In todays exercise we will be creating a Mad Libs game.
// If you’ve never played this game, a mad lib is a game where you
//  fill in a bunch of blank inputs with different word types (ie : noun, adjective, verb), 
//  and then a story is generated based on the words you chose, and sometimes the story is surprisingly funny.

// In this exercise you work with the HTML code presented below.

// Follow these steps :

// Get the value of each of the inputs in the HTML file when the
//  form is submitted. Remember the event.preventDefault()
let button = document.getElementById('lib-button')
let form = document.getElementById('libform')
let noun = document.getElementById('noun')
let adjective = document.getElementById('adjective')
let person = document.getElementById('person')
let verb = document.getElementById('verb')
let place = document.getElementById('place')
let story = document.getElementById('story')
button.addEventListener("click", function (event) {
    event.preventDefault()
    let myStory = `A ${noun.value} who is ${person.value} never ${verb.value} in this life.
    ${noun.value} used to be so ${adjective.value} when they ${verb.value} in the ${place.value} `
    story.append(myStory)
})

// Make sure the values are not empty
// Write a story that uses each of the values.
// Make sure you check the console for errors when playing the game.
// Bonus: Add a “shuffle” button to the HTML file, when clicked the
//  button should change the story currently displayed (but keep the values entered by the user). 
//  The user could click the button at least three times and get a new story. Display the stories randomly.