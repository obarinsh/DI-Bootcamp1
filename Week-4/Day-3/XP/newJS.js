// Exercise 6 : Change the navbar
// Instructions
// Create a new structured HTML file and a new Javascript file
// Add the code above, to your HTML file

// Using Javascript, in the <div>, change the value of the id attribute from navBar to socialNetworkNavigation, using the setAttribute method.

// let navBar = document.getElementById("navBar")
// navBar.setAttribute('id', 'socialNetworkNavigation')

// // We are going to add a new <li> to the <ul>.
// // First, create a new <li> tag (use the createElement method).
// let ul = document.querySelector("ul")
// let li = document.createElement("li")
// ul.appendChild(li)

// // Create a new text node with “Logout” as its specified text.
// let logout = document.createTextNode('Logout')
// // Append the text node to the newly created list node (<li>).
// li.append(logout)
// // Finally, append this updated list node to the unordered list (<ul>), using the appendChild method.
// ul.appendChild(li)
// // Use the firstElementChild and the lastElementChild properties to retrieve the first and last <li> elements from their parent element (<ul>). Display the text of each link. (Hint: use the textContent property).
// console.log(ul.firstElementChild.textContent)
// console.log(ul.lastElementChild.textContent)


// Exercise 7 : My Book List
// Instructions
// Take a look at this link for help.

// The point of this challenge is to display a list of two books on your browser.

// In the body of the HTML page, create an empty section:
// <section class="listBooks"></section>

// In the js file, create an array called allBooks. This is an array of objects. Each object is a book that has 4 keys (ie. 4 properties) :
// title,
// author,
// image : a url,
// alreadyRead : which is a boolean (true or false).
let allBooks = [
    {
        title: "The Pragmatic Programmer",
        author: "Andrew Hunt and David Thomas",
        image: "https://m.media-amazon.com/images/I/41as+WafrFL.jpg",
        alreadyRead: true
    },
    {
        title: "Clean Code",
        author: "Robert C. Martin",
        image: "https://m.media-amazon.com/images/I/41jEbK-jG+L.jpg",
        alreadyRead: false
    }
]
// Initiate the array with 2 books of your choice (ie. Add manually 2 books objects in the array)

// Requirements : All the instructions below need to be coded in the js file:


// Using the DOM, render each book inside a div (the div must be added to the <section> created in part 1).
let section = document.getElementsByClassName("listBooks")[0]
let newDiv = document.createElement('div')
for (let i = 0; i < allBooks.length; i++) {
    let book = allBooks[i]
    let bookInfo = document.createElement("p");
    bookInfo.innerHTML = `<strong>${book.title}</strong> by ${book.author}`;
    let img = document.createElement("img");
    img.src = book.image;
    img.style.width = 100 + 'px'
    newDiv.appendChild(bookInfo);
    newDiv.appendChild(img);
    if (book.alreadyRead == true) {
        bookInfo.style.color = 'red'
    }
}
section.appendChild(newDiv);



// For each book :
// You have to display the book’s title and the book’s author.
// Example: HarryPotter written by JKRolling.
// The width of the image has to be set to 100px.
// If the book is already read. Set the color of the book’s details to red.