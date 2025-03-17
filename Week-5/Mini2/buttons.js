// Project Brief
// Create a drumset using HTML, CSS, JS.

//     Goal of this Mini project
// This looks complex, but it’s pretty simple.

// Get the clicked element, or key press.
// Use it’s value to get the correct audio element.
// Play the audio element.


//     Hints
// Focus on the JS.Get it working.Make it look pretty later.
// Look up how to play audio in HTML and JS. (w3schools)
// Add event listeners for keyboard and / or mouse clicks.
// for keyboard events, you can get the key by looking at the property keyCode of the event object
// for mouse click events, you can get the key by looking at the this object.
let sounds = {
    "1": "sounds/boom.wav",
    "2": "sounds/clap.wav",
    "3": "sounds/hihat.wav",
    "4": "sounds/kick.wav",
    "5": "sounds/openhat.wav",
    "6": "sounds/ride.wav",
    "7": "sounds/snare.wav",
    "8": "sounds/tink.wav",
    "9": "sounds/tom.wav"
};

let keyBoard = {
    "a": "1",
    "s": "2",
    "d": "3",
    "f": "4",
    "g": "5",
    "h": "6",
    "j": "7",
    "k": "8",
    "l": "9"
};

let buttons = document.getElementsByClassName('button');

for (let button of buttons) {
    button.addEventListener("click", () => {
        let sound = new Audio(sounds[button.id]);
        sound.play();
    });
}

document.addEventListener("keydown", (event) => {
    let keyPressed = event.key.toLowerCase()
    let buttonId = keyBoard[keyPressed]
    let sound = new Audio(sounds[buttonId])
    sound.play();
});
let body = document.getElementsByTagName('body')[0]
body.style.backgroundImage = "url('stage.jpg')";
body.style.backgroundSize = "cover";
body.style.backgroundRepeat = "no-repeat";

