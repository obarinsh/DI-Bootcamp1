import { TodoList } from "./todo.js";

console.log(TodoList)


const newList = new TodoList();
newList.addTask("being tired");
newList.addTask("wash the dishes");
newList.addTask("buy zatar");
console.log(newList)

newList.markTasksAsCompleted("being tired")
console.log(newList)

newList.listTasks()
console.log(newList)
