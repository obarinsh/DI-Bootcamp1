// Instructions
// You should use this API: https://www.swapi.tech/ to get the data and update it “randomly” in your website by clicking a button.
// Note: The API contains 83 different characters

// Create your HTML file, and add the relevant elements.

// In your JS file, create your functions:
// to retrieve the elements from the DOM.
// to get the data from the API(star wars characters).
// to display the info on the DOM: the name, height, gender, birth year, and home world of the character.

// Display the data using AJAX.Make sure to display a loading message as follows:
//     You can use any of these animation icons for the loading message.
// Fontawesome link:
// https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css

// 4.If there is an error getting the data, display a message as follows:
// 5.You can use your own css to style the website as you see fit



let mainCard = document.createElement('div')
mainCard.id = 'main-card'
document.body.appendChild(mainCard)

let nameDiv = document.createElement('div')
nameDiv.id = 'name'
let heightDiv = document.createElement('div')
heightDiv.id = 'height'
let genderDiv = document.createElement('div')
genderDiv.id = 'gender'
let birthDiv = document.createElement('div')
birthDiv.id = 'bday'
let homeWorldDiv = document.createElement('div')
homeWorldDiv.id = 'home-world'

let loadingDiv = document.createElement('div')
loadingDiv.id = 'loading'
let i = document.createElement('i')
i.className = "fa-solid fa-spinner fa-spin-pulse"




async function fetchRandPerson() {
    const randomId = getRandNumber()

    const API_PERSON_URL = `https://www.swapi.tech/api/people/${randomId}`

    showLoader()
    let personResponse = await fetch(API_PERSON_URL)

    if (!personResponse.ok) {
        mainCard.innerText = ('Oh No! That person isnt available');
        throw new Error(`Error: ${response.status}`);
    }
    // if (!planetResponse.ok) throw new Error(`Planet API Error: ${planetResponse.status}`);

    let personData = await personResponse.json();
    let person = personData.result.properties;

    let planetUrl = person.homeworld;
    let planetResponse = await fetch(planetUrl);
    if (!planetResponse.ok) throw new Error(`Planet API Error: ${planetResponse.status}`);

    let planetData = await planetResponse.json();
    let planet = planetData.result.properties;

    hideLoader()
    nameDiv.innerText = person.name
    heightDiv.innerText = `Height: ${person.height}`
    genderDiv.innerText = `Gender: ${person.gender}`
    birthDiv.innerText = `Birth Year: ${person.birth_year}`
    homeWorldDiv.innerText = `Home World: ${planet.name}`
    mainCard.append(nameDiv, heightDiv, genderDiv, birthDiv, homeWorldDiv)

    {
    }
}


function showLoader() {
    mainCard.innerHTML = ''
    let loader = document.createElement('i')
    loader.innerHTML = "Loading..."
    loader.classList.add("fa-solid", "fa-spinner", "fa-spin-pulse")
    loader.id = "loader"
    mainCard.appendChild(loader)
}

function hideLoader() {
    let loader = document.getElementById("loader");
    if (loader) loader.remove();
}


function getRandNumber() {
    return Math.floor(Math.random() * 83) + 1;
}


let searchButton = document.createElement('button')
searchButton.id = 'search'
document.body.appendChild(searchButton)
searchButton.innerText = "Find Someone"


searchButton.addEventListener('click', () => {
    fetchRandPerson()
})


// let query = ''

// let input = document.querySelector('input')
// let gifContainer = document.createElement('div')
// document.body.appendChild(gifContainer)

// let deleteButton = document.createElement('button')
// deleteButton.id = 'delete';
// deleteButton.textContent = 'Delete';

// let deleteAll = document.createElement('button')
// deleteAll.id = 'delete-all';
// deleteAll.textContent = 'Delete All';

// input.addEventListener('input', async () => {
//     query = input.value.trim().toLowerCase()
//     if (query) {
//         let gif = await fetchRandGif();
//         gifContainer.innerHTML = ''
//         if (gif) {
//             gifContainer.appendChild(gif)
//             gifContainer.appendChild(deleteButton)
//         }
//     }
// })

// deleteButton.addEventListener('click', () => {
//     img.style.display = 'none'
// })
// deleteAll.addEventListener('click', () => {
//     gifContainer.innerHTML = ''
// })


// async function fetchRandGif() {
//     const API_KEY = 'hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My'
//     const API_URL = `https://api.giphy.com/v1/gifs/search?q=${query}&rating=g&api_key=${API_KEY}`
//     let response = await fetch(API_URL);
//     if (!response.ok) {
//         throw new Error(`Error: ${response.status}`);
//     }

//     let results = await response.json()
//     if (results.data.length > 0) {
//         let randomIndex = Math.floor(Math.random() * results.data.length);
//         let gifUrl = results.data[randomIndex].images.fixed_height.url;
//         let img = document.createElement('img');
//         img.src = gifUrl;
//         img.alt = query;
//         img.style.display = 'block'
//         return img;
//     }
// }
