"use strict";
// TASK MANAGEMENT APP
// This file serves as the entry point for the task management application.
class Task {
    constructor(id, title, description, completed = false) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.completed = completed;
    }
}
console.log(`\nTask Management Application`);
class TaskManager {
    constructor() {
        this.tasks = [];
    }
    addTask(task) {
        this.tasks.push(task);
        console.log(`${task.title} - ${task.description} added successfully`);
    }
    getTaskById(id) {
        return this.tasks.find(task => task.id === id);
    }
    markTaskComplete(id) {
        const task = this.getTaskById(id);
        if (task) {
            task.completed = true;
            console.log(`${task.title} is ${task.completed ? "complete" : "incomplete"}`);
        }
    }
}
// === run ===
const manage = new TaskManager();
console.log(`\n Added Tasks`);
manage.addTask(new Task(1, "Write", "Write reports"));
manage.addTask(new Task(2, "Clean", "Do laundry"));
manage.addTask(new Task(3, "Practice", "Practice coding for 1 hour"));
console.log(`\n Completed Tasks`);
manage.markTaskComplete(2);
manage.markTaskComplete(3);
