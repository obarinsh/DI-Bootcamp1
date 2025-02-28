// Copy the code above, to a structured HTML file.
// In your Javascript file, use setInterval to move the <div id="animate"> to the right side of the <div id="container">, when the button is clicked on.
// The <div id="animate"> should move 1px to the right every milisecond, until it reaches the end of the <div id="container">.
// Hint : use clearInterval as soon as the box reaches the right end side of the container
// Hint : check out the demonstration in the Course Noted named JS Functions
let animDiv = document.getElementById('animate');
let button = document.getElementsByTagName('button')[0];
let intervalId;

function myMove() {
    let container = animDiv.parentElement
    let containerWidth = container.clientWidth
    let elementWidth = animDiv.offsetWidth
    let maxLeft = containerWidth - elementWidth

    let pos = 0;
    clearInterval(intervalId)

    intervalId = setInterval(() => {
        if (pos >= maxLeft) {
            clearInterval(intervalId);
        } else {
            pos += 5;
            animDiv.style.left = pos + "px";
        }
    }, 20);
}

button.addEventListener("click", myMove);