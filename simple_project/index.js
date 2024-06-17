function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskList = document.getElementById("taskList");

    if (taskInput.value !== "") {
        var li = document.createElement("li");
        li.innerHTML = taskInput.value + " <span class='delete-btn' onclick='deleteTask(this)'>X</span>";
        taskList.appendChild(li);
        taskInput.value = "";
    } else {
        alert("Please enter a task.");
    }
}

function deleteTask(element) {
    element.parentElement.remove();
}


