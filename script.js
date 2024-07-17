document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('taskInput');
    const addTaskButton = document.getElementById('addTaskButton');
    const taskList = document.getElementById('taskList');

    addTaskButton.addEventListener('click', () => {
        const taskText = taskInput.value.trim();
        if (taskText !== '') {
            addTask(taskText);
            taskInput.value = '';
        }
    });

    taskInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            const taskText = taskInput.value.trim();
            if (taskText !== '') {
                addTask(taskText);
                taskInput.value = '';
            }
        }
    });

    function addTask(taskText) {
        const taskItem = document.createElement('li');
        taskItem.className = 'task';
        taskItem.innerHTML = `
            <span>${taskText}</span>
            <div>
                <button class="complete-btn">✔️</button>
                <button class="delete-btn">❌</button>
            </div>
        `;

        taskList.appendChild(taskItem);

        const completeButton = taskItem.querySelector('.complete-btn');
        const deleteButton = taskItem.querySelector('.delete-btn');

        completeButton.addEventListener('click', () => {
            taskItem.classList.toggle('completed');
        });

        deleteButton.addEventListener('click', () => {
            taskItem.remove();
        });
    }
});
