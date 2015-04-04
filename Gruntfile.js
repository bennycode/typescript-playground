module.exports = function (grunt) {
  require("load-grunt-tasks")(grunt, {
    pattern: ["grunt-*", "!grunt-template-jasmine-istanbul"]
  });

  grunt.initConfig({
    // Tasks
    ts: require("./config/ts.js"),
    // Settings
    pkg: grunt.file.readJSON("package.json")
  });

  /* Self Test */
  grunt.registerTask("app-self-test", function () {
    var pkg = grunt.file.readJSON("package.json");
    return grunt.log.writeln("Grunt works. Module: " + pkg.name);
  });

  /* Default */
  grunt.registerTask("default", ["ts"]);
};
