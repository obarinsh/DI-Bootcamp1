let container = document.querySelector('.container');

for (let i = 1; i <= 3000; i++) {
    let div = document.createElement('div');
    div.className = 'item';
    // div.textContent = i;
    container.appendChild(div);
}


let colors = document.querySelector('.colors');

for (let j = 1; j <= 18; j++) {
    let divColor = document.createElement('div');
    divColor.className = 'col';
    divColor.style.backgroundColor = getRandomRGB()
    colors.appendChild(divColor);
}


let selectedColor = ''
let isPainting = false;
chooseTheColor()
function chooseTheColor() {
    let colorPallette = document.getElementsByClassName("col")
    for (let i = 0; i < colorPallette.length; i++) {
        let colorBox = colorPallette[i]
        colorBox.addEventListener('click', () => {
            selectedColor = colorBox.style.backgroundColor
            console.log(selectedColor)
        })
    }
}

paintTheCell()
function paintTheCell() {
    let cellsOfGrid = document.getElementsByClassName('item')
    for (let i = 0; i < cellsOfGrid.length; i++) {
        let cell = cellsOfGrid[i]
        cell.addEventListener("mousedown", () => {
            isPainting = true
            cell.style.backgroundColor = selectedColor
        })
        cell.addEventListener('mouseover', function () {
            if (isPainting) {
                cell.style.backgroundColor = selectedColor
            }
        })
    }
    window.addEventListener('mouseup', function () {
        isPainting = false;
    });
}

clearField()
function clearField() {
    let clearButton = document.getElementById("clear")
    clearButton.addEventListener("click", () => {
        let cellsOfGrid = document.getElementsByClassName('item')
        for (let i = 0; i < cellsOfGrid.length; i++) {
            let cellOfGrid = cellsOfGrid[i]
            cellOfGrid.style.backgroundColor = 'rgb(215, 235, 242)'
        }
    })
}

function getRandomRGB() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}
