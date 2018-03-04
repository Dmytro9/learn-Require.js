define(["list"], function(List) {
  "use strict";

  function createList(listId) {
    return new List();
  }

  return {
    createList: createList
  };
});
