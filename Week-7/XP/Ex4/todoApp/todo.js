
export class TodoList {
    constructor(list = []) {
        this.list = list
    }
    addTask(newTask) {
        this.list.push({ name: newTask, completed: false })
    }
    markTasksAsCompleted(completedTask) {
        this.list.forEach(task => {
            if (task.name === completedTask) {
                task.completed = true
            }
        });

    }
    listTasks() {
        return this.list.map(task => ({
            name: task.name,
            status: task.completed ? 'Completed' : 'Not Completed'
        }));
    }
}
