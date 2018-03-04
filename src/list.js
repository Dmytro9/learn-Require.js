// without dependencies. The module is available with path/filename

define(function() {
  "use strict";

  function List(listId) {
    this.tasks = [];
    this.id = listId;
  }
  List.prototype = {};
  List.prototype.constructor = List;

  return List;
});
