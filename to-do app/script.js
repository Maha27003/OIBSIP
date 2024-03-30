let tasks = [];

function addTask() {
    const taskInput = document.getElementById("task-input");
    const taskText = taskInput.value.trim();
    if (taskText === "") return;

    const task = {
        id: Date.now(),
        text: taskText,
        completed: false,
        dateAdded: new Date().toLocaleString()
    };

    tasks.push(task);
    taskInput.value = "";

    renderTasks();
}

function toggleComplete(taskId) {
    const task = tasks.find(t => t.id === taskId);
    if (task) {
        task.completed = !task.completed;
        renderTasks();
    }
}

function deleteTask(taskId) {
    tasks = tasks.filter(t => t.id !== taskId);
    renderTasks();
}

function renderTasks() {
    const pendingList = document.getElementById("pending-list");
    const completedList = document.getElementById("completed-list");

    pendingList.innerHTML = "";
    completedList.innerHTML = "";

    tasks.forEach(task => {
        const taskElement = document.createElement("li");
        taskElement.textContent = task.text;
        taskElement.addEventListener("click", () => toggleComplete(task.id));

        if (task.completed) {
            taskElement.classList.add("completed");
            completedList.appendChild(taskElement);
        } else {
            pendingList.appendChild(taskElement);
        }
    });
}
