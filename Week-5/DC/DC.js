
let button = document.getElementById('submit')
let form = document.getElementById('form')
let listTask = document.getElementsByClassName('listTasks')[0]
const tasks = []
function addTask() {
    let xButton = document.createElement('button')
    xButton.innerHTML = '<i class="fas fa-times"></i>'
    xButton.style.marginLeft = "20px"
    xButton.style.height = "30px"
    xButton.style.width = "30px"
    xButton.style.marginRight = "10px"
    // xButton.style.background = "none"
    xButton.style.color = "red"
    xButton.style.fontSize = "16px"

    let userTask = document.getElementById('task').value
    tasks.push(userTask)
    let li = document.createElement('li')
    li.style.display = "flex"
    li.style.alignItems = "center"
    li.style.marginBottom = "5px"

    let checkbox = document.createElement('input')
    checkbox.type = "checkbox"

    checkbox.style.marginLeft = "10px"

    li.textContent = userTask
    li.appendChild(xButton)
    li.appendChild(checkbox)
    listTask.appendChild(li)

    xButton.addEventListener("click", function () {
        let index = tasks.indexOf(userTask)
        if (index > -1) {
            tasks.splice(index, 1)
        }
        li.remove()
    })

}
button.addEventListener("click", function (event) {
    event.preventDefault()
    addTask()
})
