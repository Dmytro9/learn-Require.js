// with dependencies ('task') - AMD way of defining dependencies

// Common js require methods of defining dependencies:
/**
 * define(function(require) {
 * var Task = require("task");
 * });
 */

define(["task"], function(Task) {
  "use strict";

  function createTask(name) {
    return new Task(name);
  }

  return {
    createTask: createTask
  };
});
