
let button = document.getElementById('submit')
let form = document.getElementById('form')
let listTask = document.getElementsByClassName('listTasks')[0]
const tasks = []
function addTask() {
    let taskInput = document.getElementById('task');

    let xButton = document.createElement('button')


    xButton.innerHTML = '✖'; // Add "X" symbol
    xButton.style.marginRight = "10px";
    xButton.style.cursor = "pointer";


    let userTask = document.getElementById('task').value
    if (!userTask) return;
    tasks.push(userTask)
    let li = document.createElement('li')

    let checkbox = document.createElement('input')
    checkbox.type = "checkbox"
    checkbox.style.marginRight = "10px"

    let taskText = document.createElement('span');
    taskText.textContent = userTask;

    xButton.addEventListener("click", function () {
        let index = tasks.indexOf(userTask)
        if (index > -1) {
            tasks.splice(index, 1)
        }
        li.remove()
    })
    checkbox.addEventListener("change", function () {
        if (checkbox.checked) {
            taskText.style.textDecoration = "line-through";
            taskText.style.color = "gray";
        } else {
            taskText.style.textDecoration = "none";
            taskText.style.color = "black";
        }
    });



    li.appendChild(xButton)
    li.appendChild(checkbox)
    li.appendChild(taskText);
    listTask.appendChild(li);


    taskInput.value = "";
    userTask.focus();
}
button.addEventListener("click", function (event) {
    event.preventDefault()
    addTask()
})
