
// Part I
// In your Javascript file, using setTimeout, call a function after 2 seconds.
// The function will alert “Hello World”.
function hello() {
    alert('Hello World')
}
// setTimeout(hello, 2000);

// Part II
// In your Javascript file, using setTimeout, call a function after 2 seconds.
// The function will add a new paragraph <p>Hello World</p> to the <div id="container">.
function newPar() {
    let div = document.getElementById('container')
    let p = document.createElement('p')
    div.append(p)
    p.innerText = 'Hello World'

}
setTimeout(newPar, 2000);
// Part III
// In your Javascript file, using setInterval, call a function every 2 seconds.
// The function will add a new paragraph <p>Hello World</p> to the <div id="container">.
// The interval will be cleared (ie. clearInterval), when the user will click on the button.
// Instead of clicking on the button, the interval will be cleared (ie. clearInterval) as soon as there will be 5 paragraphs inside the <div id="container">.
let interval = setInterval(parag, 2000);


function parag() {
    let div = document.getElementById('container');

    if (div.getElementsByTagName('p').length >= 5) {
        clearInterval(interval);
        return;
    }

    let p = document.createElement('p');
    p.innerText = 'Hello World';
    div.append(p);
}
// let button = document.getElementById('clear')
// button.addEventListener("click", function (event) {
//     clearInterval(interval)
// })