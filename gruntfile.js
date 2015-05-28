module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    concat: {
      dist: {
        src: [
          'assets/bower_components/normalize.css/normalize.css',
          'assets/css/dev/styles.css'
        ],
        dest: 'assets/css/build/styles.css'
      }
    },
    cssmin: {
      options: {
        shorthandCompacting: false,
        roundingPrecision: -1
      },
      target: {
        files: [{
          expand: true,
          cwd: 'assets/css/build',
          src: ['*.css', '!*.min.css'],
          dest: 'assets/css/build',
          ext: '.min.css'
        }]
      }
    }
  });
  // 3. Where we tell Grunt we plan to use this plug-in.
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  // 4. Where we tell Grunt what to do when we type "grunt" into the terminal.
  grunt.registerTask('default', ['concat', 'cssmin']);
};