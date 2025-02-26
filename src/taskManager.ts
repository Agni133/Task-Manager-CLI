import { Task, TaskStatus } from "./task";
import * as fs from "fs";

export class TaskManager {
  private tasks: Task[] = [];

  constructor() {
    this.loadTasks();
  }

  // Add a new task
  addTask(title: string) {
    const newTask: Task = { id: this.tasks.length + 1, title, status: TaskStatus.Pending };
    this.tasks.push(newTask);
    this.saveTasks();
    console.log(`✅ Task added: ${title}`);
  }

  // List all tasks
  listTasks() {
    console.log("\n📋 Your Tasks:");
    this.tasks.forEach((task) => {
      console.log(`${task.id}. ${task.title} - ${task.status}`);
    });
  }
  // Mark a task as completed
  markTaskCompleted(taskId: number) {
    const task = this.tasks.find((t) => t.id === taskId);
    if (!task) {
      console.log("❌ Task not found.");
      return;
    }
    task.status = TaskStatus.Completed;
    this.saveTasks();
    console.log(`✅ Task "${task.title}" marked as completed!`);
  }

  // Delete a task
  deleteTask(taskId: number) {
    this.tasks = this.tasks.filter((task) => task.id !== taskId);
    this.saveTasks();
    console.log(`🗑️ Task ${taskId} deleted.`);
  }

  // Load tasks from JSON file
  private loadTasks(){
    if (fs.existsSync("tasks.json")) {
      const data = fs.readFileSync("tasks.json", "utf-8");
      this.tasks = JSON.parse(data);
    }
  }

  // Save tasks to JSON file
  private saveTasks(): void {
    fs.writeFileSync("tasks.json", JSON.stringify(this.tasks, null, 2));
  }
}



