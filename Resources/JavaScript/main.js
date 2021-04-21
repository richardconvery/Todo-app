const source = document.getElementById('tasks').innerHTML;
const template = Handlebars.compile(source);

const context = {
  tasks: [
      {
        "taskname": "Task 1",
        "status": "active"
      },
      {
        "taskname": "Task 2",
        "status": "active"
      },
      {
        "taskname": "Task 3",
        "status": "complete"
      },
      {
        "taskname": "Task 4",
        "status": "active"
      },
      {
        "taskname": "Task 5",
        "status": "active"
      },
      {
        "taskname": "Task 6",
        "status": "complete"
      },
      {
        "taskname": "Task 7",
        "status": "active"
      }
  ]
};

const compiledHtml = template(context);

const displayTasks = document.getElementById('todo-banner');
displayTasks.innerHTML = compiledHtml;

// Count the number of tasks in the array
function numberOfTasks() {
    let countTasks = context.tasks.length;
    document.getElementById("countOfTasks").innerHTML = countTasks;
};

// Create the task when the user presses enter
// Get the input field
var input = document.getElementById("newTask");

// Execute a function when the user releases a key on the keyboard
input.addEventListener("keyup", function(event) {
  // Number 13 is the "Enter" key on the keyboard
  if (event.keyCode === 13 || event.key === "button") {
    // Cancel the default action, if needed
    event.preventDefault();
    // Trigger the button element with a click
    document.getElementById("myBtn").click(createTask());
  }
}); 

// Add to new task to the array
function createTask(){
  // Get the value from the input field
  let description = document.getElementById("newTask").value;
  // If the field is empty the create an alert
  if (description === ''){
    alert("Please enter a task name");
  } else {
    // Add the new task to the array
    context.tasks.push({taskname:description, status:"active"})
    // Clear the input field ready for a new task
    document.getElementById('newTask').value = '';
    console.log(context.tasks);
  };
}
