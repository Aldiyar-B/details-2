const todoListHigh = document.querySelector(".high");
const todoListLow = document.querySelector(".low");
const inputHighTask = document.querySelector(".add__task-high");
const inputLowTask = document.querySelector(".add__task-low");
const formHigh = document.querySelector("#form-high");
const formLow = document.querySelector("#form-low");
const form = document.querySelectorAll(".form");
const formInputValue = document.querySelector(".todo__add-input");
const formInputHigh = document.querySelector(".add__task-high");
const formInputLow = document.querySelector(".add__task-low");
formInputHigh.focus();

const STATUS = {
  DONE: "Done",
  TO_DO: "To Do",
};
//
const PRIORITY = {
  HIGH: "High",
  LOW: "Low",
};

let tasks = [];

function Task(name, priority) {
  this.name = name;
  this.status = STATUS.TO_DO;
  this.priority = priority;
}

function addTask(event, priority, input, priorityList) {
  event.preventDefault();
  
  const newTask = new Task(input.value, priority);

  const suchTask = tasks.find((task) => task.name === newTask.name);

  if (!suchTask && newTask.name !== "") {
    tasks.push(newTask);

    const task = document.createElement("div");
    task.className = "todo__task";

    const taskContent = document.createElement("div");
    taskContent.classList = "todo__task-content";
    task.append(taskContent);

    const label = document.createElement("label");
    label.classList = "todo__task-text";

    const input = document.createElement("input");
    const isDoneCheckbox = newTask.status === STATUS.DONE ? true : false;
    input.classList = "todo__task-checkbox";
    input.type = "checkbox";
    input.checked = isDoneCheckbox;
    input.dataset.action = "done";
    label.append(input);

    const isDoneText = newTask.status === STATUS.DONE ? "todo__name todo__name--done" : "todo__name ";
    const span = document.createElement("span");
    span.classList = isDoneText;
    span.textContent = newTask.name;
    label.append(span);

    const date = new Date();
    const normalDate = date.toLocaleString();
    const time = document.createElement("span");
    time.classList = "time"
    time.textContent = normalDate;
    label.append(time);

    taskContent.append(label);

    const button = document.createElement("button");
    button.classList = "todo__icon-delete";
    button.dataset.action = "delete";

    task.append(button);
    priorityList.append(task);
  }
  input.value = "";
}

const submitHandlerHigh = (event) => {
  addTask(event, PRIORITY.HIGH, inputHighTask, todoListHigh);
};

const submitHandlerLow = (event) => {
  addTask(event, PRIORITY.LOW, inputLowTask, todoListLow);
};

formHigh.addEventListener("submit", submitHandlerHigh);
formLow.addEventListener("submit", submitHandlerLow);

todoListHigh.addEventListener("click", deleteTask);
todoListLow.addEventListener("click", deleteTask);

function deleteTask(event) {
  if (event.target.dataset.action === "delete") {
    const parentNode = event.target.closest(".todo__task");
    const taskName = parentNode.querySelector(".todo__name").textContent;
    parentNode.remove();
    tasks = tasks.filter((task) => task.name !== taskName);
  }
}

todoListLow.addEventListener("click", doneTask);
todoListHigh.addEventListener("click", doneTask);

function doneTask(event) {
  if (event.target.dataset.action !== "done") return;

  const parentNode = event.target.closest(".todo__task");
  const taskName = parentNode.querySelector(".todo__name").textContent;

  const changeStatus = tasks.find((task) => task.name === taskName);
  changeStatus.status = changeStatus.status === STATUS.TO_DO ? STATUS.DONE : STATUS.TO_DO;
  const taskTitle = parentNode.querySelector(".todo__name");
  taskTitle.classList.toggle("todo__name--done");
}
console.log(tasks);
