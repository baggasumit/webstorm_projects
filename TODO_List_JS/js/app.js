//Problem: User interaction doesn't provide desired results.
//Solution: Add interactivty so the user can manage daily tasks.

var taskInput = document.getElementById("new-task"); //new-task
var addButton = document.querySelector("button"); //first button
var deleteButtons = document.getElementsByClassName("delete");
var editButtons = document.getElementsByClassName("edit");
var incompleteTasksHolder = document.getElementById("incomplete-tasks"); //incomplete-tasks
var completedTasksHolder= document.getElementById("completed-tasks"); //completed-tasks
var checkboxes = document.querySelectorAll('input[type=checkbox]');


//Add a new task
var addTask = function() {
  console.log("Add task...");
  //console.log(taskInput.value);
  //When the button is pressed
  //Create a new list item with the text from #new-task:
  if (taskInput.value.trim() == "") {return;}
  var newNode = createNewTaskNode(taskInput.value);
  addFirstChild(incompleteTasksHolder, newNode);
  taskInput.value = "";
  //input (checkbox)
    //label
    //input (text)
    //button.edit
    //button.delete
    //Each elements, needs modified and appended
}

//Edit an existing task
var editTask = function() {
  console.log("Edit task...");
  //When the Edit button is pressed
    // if the class of the parent is .editMode
  var liNode = this.parentNode;
  //var inputTextBox = liNode.getElementsByTagName("input")[1];
  var inputTextBox = liNode.querySelector("input[type=text]");
  //var label = liNode.getElementsByTagName("label")[0];
  var label = liNode.querySelector("label");
  var editButton = liNode.querySelector("button.edit");
  if (liNode.classList.contains("editMode")) {
      console.log("editModeFound");
      //console.log(label.innerText);

      //Switch from .editMode
      //label text become the input's value
      label.innerText = inputTextBox.value;
      editButton.innerText = "Edit";
  }
  //else
  else {

      //console.log(label.innerText);
      //Switch to .editMode
      //input value becomes the label's text
      inputTextBox.value = label.innerText;
      editButton.innerText = "Save";
  }
  //Toggle .editMode on the parent
  liNode.classList.toggle("editMode");
  inputTextBox.focus();
}

//Delete an existing task
var deleteTask = function() {
  console.log("Delete task...");
  //console.log(this.parentNode);

  //When the Delete button is pressed
    //Remove the parent list item from the ul
  liNode = this.parentNode;
  ulNode = this.parentNode.parentNode;
  ulNode.removeChild(liNode);
}

var shiftTask = function () {
  console.log("checked...");
  //console.log(this);
  liNode = this.parentNode;
  ulNode = this.parentNode.parentNode;
  ulNode.removeChild(liNode);
  if(this.checked) {
      //taskCompleted();
      addFirstChild(completedTasksHolder, liNode);
  } else {
      //taskIncomplete();
      addFirstChild(incompleteTasksHolder, liNode);
  }
}

var addFirstChild = function(parentNode, childNode) {
    if (parentNode.hasChildNodes()) {
        parentNode.insertBefore(childNode, parentNode.firstChild);
    } else {
        parentNode.appendChild(childNode);
    }
}

//Mark a task as complete
var taskCompleted = function() {
  console.log("Task complete...");
    console.log(this);
  //When the checkbox is checked
    //Append the task list item to the #completed-tasks
}

//Mark a task as incomplete
var taskIncomplete = function() {
  console.log("Task incomplete...");
  console.log(this);
  //When the checkbox is unchecked
    //Append the task list item to the #incomplete-tasks
}

// Helper Functions

var createNewTaskNode = function (taskName) {
  var liNode = document.createElement("li");

  var checkboxNode = document.createElement("input");
  checkboxNode.type = "checkbox";
  //checkboxNode.setAttribute("type", "checkbox");
  checkboxNode.onchange = shiftTask;
  liNode.appendChild(checkboxNode);

  var labelNode = document.createElement("label");
  labelNode.innerText = taskName;
  liNode.appendChild(labelNode);

  var inputTextNode = document.createElement("input");
  //inputTextNode.setAttribute("type", "text");
  inputTextNode.type = "text";
  liNode.appendChild(inputTextNode);

  var editNode = document.createElement("button");
  editNode.className = "edit";
  editNode.innerText = "Edit";
  editNode.onclick = editTask;
  liNode.appendChild(editNode);


  var deleteNode = document.createElement("button");
  deleteNode.className = "delete";
  deleteNode.innerText = "Delete";
  deleteNode.onclick = deleteTask;
  liNode.appendChild(deleteNode);


  console.log(liNode);
  return liNode;
}



// Set the click handler to the addTask function
addButton.onclick = addTask;
for(let i = 0; i < deleteButtons.length; i++) {
  deleteButtons[i].onclick = deleteTask;
  editButtons[i].onclick = editTask;
  checkboxes[i].onchange = shiftTask;
}









