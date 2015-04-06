module.exports = function (grunt) {
  require("load-grunt-tasks")(grunt);

  grunt.initConfig({
    ts: require("./config/ts.js"),
    pkg: grunt.file.readJSON("package.json")
  });

  grunt.registerTask("default", ["ts"]);
};
