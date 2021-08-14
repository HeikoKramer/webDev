// document.getElementById()

console.log(document.getElementById("task-title").id);
//  > task-title

console.log(document.getElementById("task-title").className);
//  > test

// Change Styling
document.getElementById("task-title").style.background = "#333";
document.getElementById("task-title").style.color = "#fff";
document.getElementById("task-title").style.padding = "5px";

// document.getElementById("task-title").style.display = "none";

//  Change Content
document.getElementById("task-title").textContent = "Task List";
document.getElementById("task-title").innerText = "My Tasks";
document.getElementById("task-title").innerHTML =
  '<span style="color:red">Task List</span>';
