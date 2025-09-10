function addTask() {
    task = taskInput.value
    console.log(task);

    if (task === "") {
        alert("Please add a List")
    }

    else {
        let li = document.createElement("li")
        
        li.innerHTML = 
        `<div class="flex items-center justify-left relative lg:w-[510px]">
            <img src="https://i.pinimg.com/1200x/17/6b/21/176b21eae2b4ff4505d2f2f79110dc37.jpg" class="w-[45px]"  alt="">
            ${task}
            <div class="btn-div flex absolute right-0">
                <button type="button" onclick="editTask(this)" class="px-[30px] py-[8px] ml-20 bg-green-500 text-white">Edit</button>
                <button onclick="deleteTask(this)" class="px-[30px] py-[8px] ml-2 bg-red-500 text-white">Delete</button>
            </div>
        </div>`

        taskList.appendChild(li);
        taskInput.value = " "
    }
}

function editTask(button){
    console.log(button);
    li = button.parentNode
    console.log(li);
    console.log(li.childNodes[2]);
    currentText = li.childNodes[2].textContent
    console.log(currentText);
    newText = prompt("Edit Task ", currentText)

    if(newText){
        li.childNodes[2].textContent = newText
    }
}

function deleteTask(button) {
    let li = button.closest("li");
    li.remove();
}
