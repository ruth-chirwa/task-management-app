// TASK MANAGEMENT APP
// This file serves as the entry point for the task management application.
var Task = /** @class */ (function () {
    function Task(id, title, description, completed) {
        if (completed === void 0) { completed = false; }
        this.id = id;
        this.title = title;
        this.description = description;
        this.completed = completed;
    }
    return Task;
}());
console.log("\nTask Management Application");
var TaskManager = /** @class */ (function () {
    function TaskManager() {
        this.tasks = [];
    }
    TaskManager.prototype.addTask = function (task) {
        this.tasks.push(task);
        console.log("".concat(task.title, " - ").concat(task.description, " added successfully"));
    };
    TaskManager.prototype.getTaskById = function (id) {
        return this.tasks.find(function (task) { return task.id === id; });
    };
    TaskManager.prototype.markTaskComplete = function (id) {
        var task = this.getTaskById(id);
        if (task) {
            task.completed = true;
            console.log("".concat(task.title, " mark as complete"));
        }
        else {
            console.log("Task ".concat(id, " not found"));
        }
    };
    TaskManager.prototype.listAllTasks = function () {
        console.log("\n All Tasks");
        this.tasks.forEach(function (task) {
            var status = task.completed ? "complete" : "incomplete";
            console.log("".concat(task.id, ": ").concat(task.title, " - ").concat(status));
        });
    };
    return TaskManager;
}());
// === run ===
var manage = new TaskManager();
console.log("\n Added Tasks");
manage.addTask(new Task(1, "Write", "Write reports"));
manage.addTask(new Task(2, "Clean", "Do laundry"));
manage.addTask(new Task(3, "Practice", "Practice coding for 1 hour"));
// list all tasks before completion
manage.listAllTasks();
console.log("\n Completed Tasks");
manage.markTaskComplete(2);
manage.markTaskComplete(3);
console.log("\n Error messages");
manage.markTaskComplete(4);
// list all tasks after marking completion
manage.listAllTasks();
