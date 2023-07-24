// Get references to HTML elements
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

// Function to add a new task
function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }

    const listItem = document.createElement("li");
    listItem.innerHTML = `
        ${taskText} <span class="delete" onclick="deleteTask(this)">X</span>
    `;

    taskList.appendChild(listItem);
    taskInput.value = "";
}

// Function to delete a task
function deleteTask(element) {
    element.parentElement.remove();
}
