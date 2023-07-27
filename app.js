const addBtn=document.querySelector("#add-btn");
const newTaskInput=document.querySelector("#wrapper input");
const taskContainer=document.querySelector(".tasks");
const error= document.getElementById("error");

const countValue= document.querySelector(".count-value");

let taskCount=0;

const displayCount =()=>{
    countValue.innerText = taskCount;
};

const addTask = () => {

    const taskName = newTaskInput.value.trim();

    if (!taskName) {
        error.style.display = "block";
        setTimeout(() => {
            error.style.display = "none";
        }, 2000); // Show the error message for 2 seconds
        return;
    }

    const task = `<div class="task"> <input type="checkbox" class="task-check"> <span class="taskname">${taskName}</span> <button class="edit"><i class="fa-solid fa-pen-to-square"></i></button> <button class="delete"><i class="fa-solid fa-trash"></i></button></div>`;

    taskContainer.insertAdjacentHTML("beforeend", task);

    // Clear the input field after adding the task
    newTaskInput.value = '';

    const deleteButtons = document.querySelectorAll(".delete");
    deleteButtons.forEach(button => {
        button.onclick = () => {

            button.parentNode.remove();
            if (checkBox.checked) {
                
            } else {
                taskCount -= 1;
            }

            displayCount(taskCount);
            
        };
    });

    const editButtons = document.querySelectorAll(".edit");

    editButtons.forEach(editBtn => {
        editBtn.onclick = (e) => {

            let targetElement = e.target;
            if (!e.target.classList.contains("edit")) {
                targetElement = e.target.parentElement;
            }

            newTaskInput.value = targetElement.previousElementSibling?.innerText;
            targetElement.parentNode.remove();

            taskCount -= 1;

            displayCount(taskCount);
        };
    });

    const taskCheck = document.querySelectorAll(".task-check");
    taskCheck.forEach((checkBox) => {
        checkBox.onchange = () => {
            checkBox.nextElementSibling.classList.toggle("completed");

            if (checkBox.checked) {
                taskCount -= 1;
            } else {
                taskCount += 1;
            }

            displayCount(taskCount);
        };
    });

    taskCount += 1;
    displayCount(taskCount);
    newTaskInput.value = "";
};

addBtn.addEventListener("click", addTask);

window.onload = () => {
    taskCount = 0;
    displayCount(taskCount);

    newTaskInput.value = "";
}
