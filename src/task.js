/**
 *  without dependencies. The module is available with path/filename
 * in common js can be return only one variable with export
 * in amd - plain function / constructor - return Task
 * also can be used exports method - https://coursehunters.net/course/requirejs (4)
 */

define(function() {
  "use strict";

  function Task(name) {
    this.complete = false;
    this.name = name;
  }
  Task.prototype = {};
  Task.prototype.constructor = Task;

  return Task;
});
