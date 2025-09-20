function addTask() {
    let task = taskInput.value;
    console.log(task);

    if (task === "") {
        showAlert(`
            <div class="bg-red-500 px-7 py-2 rounded-lg text-white">
                <p><i class="fa-solid fa-triangle-exclamation mr-2"></i>Enter Task!</p>
            </div>
        `);
    } else {
        let li = document.createElement("li");

        li.innerHTML = `
            <div class="flex items-center justify-left relative lg:w-[680px] bg-[#ffffff] hover:bg-[#e6f1ff] transition-all duration-600 shadow-lg hover:scale-[1.009] px-3 py-2 rounded-lg">
                <img src="./tickbg.png" class="w-[40px]" alt="">
                <span class="task-text ml-4 font-semibold">${task}</span>
                <div class="btn-div flex absolute right-5">
                    <button type="button" onclick="editTask(this)" class=" shadow p-[8px] ml-20 bg-green-500 hover:bg-green-600 transition-colors duration-600 text-white rounded"><i class="fa-solid fa-pen-to-square"></i></button>
                    <button onclick="deleteTask(this)" class=" shadow p-[8px] ml-4 bg-red-500 hover:bg-red-600 transition-colors duration-600 text-white rounded"><i class="fa-solid fa-trash"></i></button>
                </div>
            </div>
        `;

        taskList.appendChild(li);
        taskInput.value = "";

        showAlert(`
            <div class="bg-green-500 px-7 py-2 rounded-lg text-white">
                <p><i class="fa-solid fa-check mr-2"></i>Task Added</p>
            </div>
        `);
    }
}

function editTask(button) {
    let li = button.closest("li");
    let taskSpan = li.querySelector(".task-text");

    let currentText = taskSpan ? taskSpan.textContent.trim() : "";

    let newText = prompt("Edit Task", currentText);

    if (newText && newText.trim() !== "") {
        taskSpan.textContent = newText.trim();

        showAlert(`
            <div class="bg-green-500 px-7 py-2 rounded-lg text-white">
                <p><i class="fa-solid fa-pen-to-square mr-2"></i>Task Edited</p>
            </div>
        `);
    }
}

function deleteTask(button) {
    let li = button.closest("li");
    li.remove();

    showAlert(`
        <div class="bg-red-500 px-7 py-2 rounded-lg text-white">
            <p><i class="fa-solid fa-trash mr-2"></i>Task Deleted</p>
        </div>
    `);
}


let alertTimeout;

function showAlert(content, duration = 4000) {
    let alert = document.getElementById("alert");
    alert.innerHTML = content;

    if (alertTimeout) {
        clearTimeout(alertTimeout);
    }

    alertTimeout = setTimeout(() => {
        alert.innerHTML = "";
    }, duration);
}