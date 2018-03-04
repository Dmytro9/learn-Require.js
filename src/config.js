require({
  baseUrl: "src", // where located scripts
  deps: ["main"],
  enforceDefine: true,
  // path based to index directory
  path: {
    knockout: "../external/knockout-3.4.2",
    underscore: "../external/underscore"
  },
  shim: {
    /**
     * non AMD-modles,
     * libs with exports names and libs that should be loaded before the scripts
     * самостоятельные библиотеки, обьявленые без define() метода(не являются AMD модулями)
     * для которых определяются имена для вызовов и те, для которых нужны другие бибилиотеки -
     * зависимости (здесь не определенны)
     */
    underscore: {
      //deps: "some deps",
      exports: "_" // exports namespace
    }
  }
});

define();
