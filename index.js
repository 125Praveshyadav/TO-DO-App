let todoList = [];

function Task() {
  let inputData = document.querySelector("#taskInput");
  let inputDate = document.querySelector("#dueDateInput");

  let todoItem = inputData.value.trim();
  let todoDate = inputDate.value;
  if (todoItem === "" || todoDate === "") return;
  todoList.push({ item: todoItem, dueDate: todoDate });
  inputData.value = "";
  inputDate.value = "";
  displayItem();
}

function displayItem() {
  let taskList = document.querySelector(".taskList");
  let newHTML = "";
  for (let i = 0; i < todoList.length; i++) {
    let { item, dueDate } = todoList[i];
    newHTML += ` 
    <div class = "row">
    <div class = "labels">
    <span class = "item"> ${item}</span>
       <span class = "date"> ${dueDate}</span>
</div>
    <button class = "btn-danger" onclick = "Delete(${i})"> Delete </button>
     </div>
    `;
  }
  taskList.innerHTML = newHTML;
}
function Delete(i) {
  todoList.splice(i, 1);
  displayItem();
}
