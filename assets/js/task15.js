let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

function renderTasks() {
    const taskList = document.getElementById('taskList');
    taskList.innerHTML = '';
    tasks.forEach((task, index) => {
        const li = document.createElement('li');
        li.innerHTML = `
            <span class="${task.completed ? 'completed' : ''}">${task.text}</span>
            <button onclick="toggleCompleted(${index})">${task.completed ? 'Undo' : 'Complete'}</button>
            <button onclick="deleteTask(${index})">Delete</button>
        `;
        if (task.priority) {
            li.querySelector('span').classList.add('priority');
        }
        taskList.appendChild(li);
    });
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();
    if (taskText) {
        const newTask = {
            text: taskText,
            completed: false,
            priority: false
        };
        tasks.push(newTask);
        taskInput.value = '';
        renderTasks();
    }
}

function toggleCompleted(index) {
    tasks[index].completed = !tasks[index].completed;
    renderTasks();
}

function deleteTask(index) {
    tasks.splice(index, 1);
    renderTasks();
}

renderTasks();
