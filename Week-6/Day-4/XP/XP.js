// 🌟 Exercise 1 : Giphy API
// Create a program to retrieve the data from the API URL provided above.
// Use the fetch() method to make a GET request to the Giphy API and Console.log the Javascript Object that you receive.
// Make sure to check the status of the Response and to catch any occuring errors.


// async function fetchGifs() {
//     let response = await fetch('https://api.giphy.com/v1/gifs/search?q=hilarious&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My');
//     if (!response.ok) {
//         throw new Error(`Error: ${response.status}`);
//     }

//     let results = await response.json()
//     console.log(results)
// }

// fetchGifs();


// 🌟 Exercise 2 : Giphy API
// Instructions
// Read carefully the documention to understand all the possible queries that 
// the URL accept.
// Use the Fetch API to retrieve 10 gifs about the “sun”. The starting position 
// of the results should be 2.
// Make sure to check the status of the Response and to catch any occuring errors.
// Console.log the Javascript Object that you receive.
// const query = 'sun'
// const limit = 10
// const offset = 2

// const API_URL = `https://api.giphy.com/v1/gifs/search?q=${query}&rating=g&limit=${limit}&offset=${offset}&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My`
// async function fetchTheSun() {
//     let response = await fetch(API_URL);
//     if (!response.ok) {
//         throw new Error(`Error: ${response.status}`);
//     }
//     let results = await response.json()
//     console.log(results)
// }

// fetchTheSun();

// 🌟 Exercise 3 : Async function
// Improve the program below :

// fetch("https://www.swapi.tech/api/starships/9/")
//     .then(response => response.json())
//     .then(objectStarWars => console.log(objectStarWars.result));
// Create an async function, that will await for the above GET request.
// The program shouldn’t contain any then() method.
// Make sure to check the status of the Response and to catch any occuring errors.


// ±±±±±±±Improved version±±±±±
// async function starShip() {
//     let response = await fetch("https://www.swapi.tech/api/starships/9/")
//     if (!response.ok) {
//         throw new Error(`Error: ${response.status}`);
//     }
//     let objectStarWars = await response.json()
//     console.log(objectStarWars.result)
// }

// starShip()

// 🌟 Exercise 4: Analyze
// Instructions
// Analyse the code provided below - what will be the outcome?

function resolveAfter2Seconds() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('resolved');
        }, 2000);
    });
}

async function asyncCall() {
    console.log('calling');
    let result = await resolveAfter2Seconds();
    console.log(result);
}

asyncCall();


//  - 'calling'
// -after 2sec 'resolved'