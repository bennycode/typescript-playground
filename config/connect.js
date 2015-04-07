// https://github.com/gruntjs/grunt-contrib-connect
module.exports = {
  server: {
    options: {
      base: '.',
      hostname: '*',
      port: '<%= port.webServer %>'
    }
  }
};
