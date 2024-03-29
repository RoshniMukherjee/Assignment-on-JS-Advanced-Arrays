var activities = [];

var userInput = document.getElementById("input");

var listDisplay = document.getElementById("todolist");

document.getElementById("button").onclick = addActivity;

function addActivity() {
  activities.push(userInput.value);
  userInput.value = "";
  displayList();
}

function displayList() {
  listDisplay.innerHTML = "";

  activities.forEach(function (activity, index) {
    listDisplay.innerHTML +=
      "<li>" +
      activity +
      "<a onclick='modifyActivity(" +
      index +
      ")'>Edit</a>" +
      "<a onclick='removeActivity(" +
      index +
      ")'>&times; | </a></li>";
  });
}

function removeActivity(index) {
  activities.splice(index, 1);
  displayList();
}

function modifyActivity(index) {
  var newActivity = prompt("Please enter the new activity:");
  activities.splice(index, 1, newActivity);
  displayList();
}
