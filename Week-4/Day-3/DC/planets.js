// Instructions
// In this exercise we will be creating a webpage with a black background as the solar system and we will fill the solar system with planets and their moons.
// We will provide the HTML page.
// You only have to work with a JS file.

// Create an array which value is the planets of the solar system.
// const planets = [
//     "Mercury",
//     "Venus",
//     "Earth",
//     "Mars",
//     "Jupiter",
//     "Saturn",
//     "Uranus",
//     "Neptune"
// ];

const moons = [
    { planet: "Mercury", moons: [] },
    { planet: "Venus", moons: [] },
    { planet: "Earth", moons: ["Moon"] },
    { planet: "Mars", moons: ["Phobos", "Deimos"] },
    { planet: "Jupiter", moons: ["Io", "Europa", "Ganymede", "Callisto"] },
    { planet: "Saturn", moons: ["Titan", "Rhea", "Iapetus", "Dione", "Enceladus", "Tethys"] },
    { planet: "Uranus", moons: ["Miranda", "Ariel", "Umbriel", "Titania", "Oberon"] },
    { planet: "Neptune", moons: ["Triton", "Proteus", "Nereid", "Larissa"] }
];
// For each planet in the array, create a <div> using createElement. This div should have a class named "planet".
let section = document.getElementsByTagName('section')[0]

for (i = 0; i < moons.length; i++) {
    let planetName = moons[i].planet;
    let planetDiv = document.createElement('div')
    planetDiv.setAttribute('class', 'planet')
    planetDiv.innerHTML = planetName

    let moonsContainer = document.createElement('div');
    moonsContainer.setAttribute('class', 'moons-container');

    let moonArray = moons[i].moons;
    for (let j = 0; j < moonArray.length; j++) {
        let moonDiv = document.createElement('div')
        moonDiv.setAttribute('class', 'moon')
        moonDiv.innerHTML = moonArray[j]
        moonDiv.style.padding = "10px"
        moonDiv.style.margin = "5px"
        moonDiv.style.display = "inline-block";
        moonDiv.style.borderRadius = "50%";
        moonDiv.style.width = "30px";
        moonDiv.style.height = "30px";
        moonDiv.style.textAlign = "center";
        moonDiv.style.display = "flex";
        moonDiv.style.justifyContent = 'center'
        moonDiv.style.alignItems = "center";
        moonsContainer.appendChild(moonDiv);
    }
    planetDiv.appendChild(moonsContainer)
    section.appendChild(planetDiv)
}

let randColor = document.getElementsByClassName('planet')
for (let i = 0; i < randColor.length; i++) {
    randColor[i].style.backgroundColor = getRandomRGBColor()
}
let moonColor = document.getElementsByClassName('moon')
for (let i = 0; i < moonColor.length; i++) {
    moonColor[i].style.backgroundColor = getRandomRGBColor()
}

// Each planet should have a different background color. (Hint: you could add a new class to each planet - each class containing a different background-color).
// Finally append each div to the <section> in the HTML (presented below).
// Bonus: Do the same process to create the moons.
// Be careful, each planet has a certain amount of moons. How should you display them?
// Should you still use an array for the planets ? Or an array of objects ?


function getRandomRGBColor() {
    let r = Math.floor(Math.random() * 256); // Random number between 0-255
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}
