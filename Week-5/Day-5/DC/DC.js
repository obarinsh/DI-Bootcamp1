let button = document.getElementsByTagName('button')[0]
button.addEventListener("click", function (e) {
    event.preventDefault()
    let name = document.getElementById("name").value;
    let surname = document.getElementById("surname").value;

    console.log(`name:${name},surname:${surname}`)

});