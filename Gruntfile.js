module.exports = function (grunt) {
  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    ts: require('./config/ts.js'),
    connect: require('./config/connect.js'),
    open: require('./config/open.js'),
    watch: require('./config/watch.js'),
    pkg: grunt.file.readJSON('package.json'),
    port: {
      webServer: 8888,
      liveReload: 36963
    }
  });

  grunt.registerTask('default', ['connect', 'open:public', 'watch:typescript']);
};
