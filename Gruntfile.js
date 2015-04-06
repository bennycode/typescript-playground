module.exports = function (grunt) {
  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    ts: require('./config/ts.js'),
    connect: require('./config/connect.js'),
    open: require('./config/open.js'),
    watch: require('./config/watch.js'),
    pkg: grunt.file.readJSON('package.json'),
    port: {
      connect: 8888,
      livereload: 36963
    }
  });

  grunt.registerTask('default', ['ts', 'connect', 'open:public', 'watch:public']);
};
