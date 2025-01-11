function Add_task(task) {
    const todolist = document.getElementById("to-dolist")
    const li = document.createElement("li")
    li.className = "todo"
    li.innerHTML = `
    <label class="todo_label">
        <input type="checkbox">
        <span>${task}</span>
    </label>
    <div class="todo_buttons">
        <button class="todo_button-edit">Edit</button>
        <button class="todo_button-delete">Delete</button>
    </div>
    `
    todolist.appendChild(li)
    const checkbox = li.querySelector('input[type="checkbox"]');
    checkbox.addEventListener('change', function () {
        const taskText = this.nextElementSibling;
        if (this.checked) {
            taskText.classList.add('completed');
        } else {
            taskText.classList.remove('completed');
        }
            });
}
document.getElementById("form").addEventListener("submit", (event) => {
    event.preventDefault()
    const taskInput = document.getElementById("todo-input");
    const task = taskInput.value.trim();
    if (task !== "") {
        Add_task(task);
        taskInput.value = "";
    }
})
document.getElementById("to-dolist").addEventListener("click", function (event) {
    if (event.target.classList.contains("todo_button-delete")) {
        event.target.parentElement.parentElement.remove();
    }
            });
document.getElementById("to-dolist").addEventListener("click", function (event) {
    if (event.target.classList.contains("todo_button-edit")) {
        const taskText = event.target.parentElement.parentElement.querySelector("span");
        const newText = prompt("Enter new task", taskText.textContent);
    if (newText !== null) {
        taskText.textContent = newText.trim();
                    }
                }
            });

const initial_state = ["html", "css", "js"]
initial_state.forEach(task => Add_task(task))