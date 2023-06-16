interface Task {
  id: number;
  title: string;
  description: string;
  completed: boolean;
}
class TodoList {
  private tasks: Task[] = [];

  addTask(task: Task): void {
    this.tasks.push(task);
  }
  markTaskAsCompleted(taskId: number): void {
    this.tasks.map((ele: Task) => {
      if (ele.id === taskId) ele.completed = true;
    });
  }
  displayTasks(): void {
    console.log(this.tasks);
  }
}

const list = new TodoList();

list.addTask({
  id: 1,
  title: "Task One",
  description: "this task one",
  completed: false,
});
list.displayTasks();
list.markTaskAsCompleted(1);
list.addTask({
  id: 2,
  title: "Task Tow",
  description: "this task Tow",
  completed: false,
});
list.displayTasks();
