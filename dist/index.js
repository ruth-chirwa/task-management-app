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
            console.log(`${task.title} mark as complete`);
        }
        else {
            console.log(`Task ${id} not found`);
        }
    }
    listAllTasks() {
        console.log(`\n All Tasks`);
        this.tasks.forEach(task => {
            const status = task.completed ? "complete" : "incomplete";
            console.log(`${task.id}: ${task.title} - ${status}`);
        });
    }
}
// === run ===
const manage = new TaskManager();
console.log(`\n Added Tasks`);
manage.addTask(new Task(1, "Write", "Write reports"));
manage.addTask(new Task(2, "Clean", "Do laundry"));
manage.addTask(new Task(3, "Practice", "Practice coding for 1 hour"));
// list all tasks before completion
manage.listAllTasks();
console.log(`\n Completed Tasks`);
manage.markTaskComplete(2);
manage.markTaskComplete(3);
console.log(`\n Error messages`);
manage.markTaskComplete(4);
// list all tasks after marking completion
manage.listAllTasks();
