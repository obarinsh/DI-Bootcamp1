// 🌟 Exercise 1 : Change the article
// Instructions
// Copy the code below, into a structured HTML file:

// Using a DOM property, retrieve the h1 and console.log it.
// let h1 = document.getElementsByTagName('h1')
// console.log(h1)

// Using DOM methods, remove the last paragraph in the <article> tag.

// let art = document.getElementsByTagName('article')[0]
// art.lastElementChild.remove()

// Add a event listener which will change the background color of the h2 to red, when it’s clicked on.
// let h2 = document.getElementsByTagName('h2')[0]
// h2.addEventListener("click", function () {
//     h2.style.backgroundColor = "red"
// })
// Add an event listener which will hide the h3 when it’s clicked on (use the display:none property).
// let h3 = document.getElementsByTagName('h3')[0]
// h3.addEventListener("click", function () {
//     h3.style.display = "none"
// })
// Add a <button> to the HTML file, that when clicked on, should make the text of all the paragraphs, bold.
// let paragraphs = document.getElementsByTagName('p')
// let button = document.getElementById('boldBtn')
// button.addEventListener("click", function () {
//     for (let i = 0; i < paragraphs.length; i++) {
//         paragraphs[i].style.fontWeight = "bold"
//     }
// })

// BONUS : When you hover on the h1, set the font size to a random pixel size between 0 to 100.(Check out this documentation)
// let h1 = document.getElementsByTagName('h1')[0]
// let randomSize = Math.floor(Math.random() * 101)
// h1.addEventListener("mouseover", function () {
//     h1.style.fontSize = randomSize + 'px'
// })


// BONUS : When you hover on the 2nd paragraph, it should fade out (Check out “fade css animation” on Google)
// let paragraph = document.getElementsByTagName('p')[1]
// paragraph.addEventListener("mouseover", function () {
//     paragraph.style.opacity = "0";
//     paragraph.style.transition = "opacity 1s ease-in-out";
// })