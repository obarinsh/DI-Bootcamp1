// Instructions
// Use this Giphy API Random documentation.Use this API
//  Key: hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My
// In the HTML file, add a form, containing an input and a button.
// This input is used to fetch gif depending on a specific category.
// In the JS file, create a program to fetch one random gif depending 
// on the search of the user(ie.If the search is “sun”, append on the 
//     page one gif with a category of “sun”).
// The gif should be appended with a DELETE button next to it.Hint : to 
// find the URL of the gif, look for the sub - object named “images” inside
//  the data you receive from the API.
// Allow the user to delete a specific gif by clicking the DELETE button.
// Allow the user to remove all of the GIFs by clicking a DELETE ALL button.

let query = ''

let input = document.querySelector('input')
let gifContainer = document.createElement('div')
document.body.appendChild(gifContainer)

let deleteButton = document.createElement('button')
deleteButton.id = 'delete';
deleteButton.textContent = 'Delete';

let deleteAll = document.createElement('button')
deleteAll.id = 'delete-all';
deleteAll.textContent = 'Delete All';

input.addEventListener('input', async () => {
    query = input.value.trim().toLowerCase()
    if (query) {
        let gif = await fetchRandGif();
        gifContainer.innerHTML = ''
        if (gif) {
            gifContainer.appendChild(gif)
            gifContainer.appendChild(deleteButton)
        }
    }
})

deleteButton.addEventListener('click', () => {
    img.style.display = 'none'
})
deleteAll.addEventListener('click', () => {
    gifContainer.innerHTML = ''
})


async function fetchRandGif() {
    const API_KEY = 'hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My'
    const API_URL = `https://api.giphy.com/v1/gifs/search?q=${query}&rating=g&api_key=${API_KEY}`
    let response = await fetch(API_URL);
    if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
    }

    let results = await response.json()
    if (results.data.length > 0) {
        let randomIndex = Math.floor(Math.random() * results.data.length);
        let gifUrl = results.data[randomIndex].images.fixed_height.url;
        let img = document.createElement('img');
        img.src = gifUrl;
        img.alt = query;
        img.style.display = 'block'
        return img;
    }
}
