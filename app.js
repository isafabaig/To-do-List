const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
const completedCounter = document.getElementById("completed-counter");
const uncompletedCounter = document.getElementById("uncompleted-counter");

function addTask() {
  const task = inputBox.value.trim();

  if (!task) {
    alert("Please write down a task");
    return;
  }

  // Create a new list item
  const li = document.createElement("li");
  li.innerHTML = `
    <label>
      <input type="checkbox">
      <span>${task}</span>
    </label>
    <span class="edit-btn">Edit</span>
    <span class="delete-btn">Delete</span>
  `;

  listContainer.appendChild(li);
  inputBox.value = "";

  // Add event listeners for the task
  const checkbox = li.querySelector("input[type='checkbox']");
  const editBtn = li.querySelector(".edit-btn");
  const taskSpan = li.querySelector("span");
  const deleteBtn = li.querySelector(".delete-btn");

  // Checkbox functionality
  checkbox.addEventListener("click", function () {
    li.classList.toggle("completed", checkbox.checked);
    updateCounters();
  });

  // Edit button functionality
  editBtn.addEventListener("click", function () {
    const update = prompt("Edit task:", taskSpan.textContent);
    if (update !== null) {
      taskSpan.textContent = update;
      li.classList.remove("completed");
      checkbox.checked = false;
      updateCounters();
    }
  });

  // Delete button functionality
  deleteBtn.addEventListener("click", function () {
    if (confirm("Are you sure you want to delete this task?")) {
      li.remove();
      updateCounters();
    }
  });

  // Update the counters
  updateCounters();
}

// Function to update task counters
function updateCounters() {
  const completedTasks = document.querySelectorAll(".completed").length;
  const totalTasks = document.querySelectorAll("#list-container li").length;

  completedCounter.textContent = completedTasks;
  uncompletedCounter.textContent = totalTasks - completedTasks;
}
