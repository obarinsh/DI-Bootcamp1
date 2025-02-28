// Instructions
// Write a JavaScript program to calculate the volume of a sphere. 
// Use the code below as a base:


let submit = document.getElementById('submit')
submit.addEventListener("click", function (event) {
    event.preventDefault();
    let radius = document.getElementById('radius').value
    let pi = 3.14159

    let volume = (4 / 3) * pi * (parseFloat(radius) ** 3)
    document.getElementById('volume').value = volume
})