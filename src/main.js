require(["task_manager", "text!views/app.html"], function(taskManager) {
  "use strict";

  var aTask = taskManager.createTask("My first task");
  console.log(aTask);
});

//also as dependencies can be html pages, alowed with there path with text! plugin
