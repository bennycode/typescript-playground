// https://github.com/gruntjs/grunt-contrib-watch
module.exports = {
  typescript: {
    options: {
      livereload: '<%= port.liveReload %>'
    },
    files: [
      'app/public/**/*.html',
      'app/code/**/*.ts'
    ],
    tasks: ['ts']
  }
};
