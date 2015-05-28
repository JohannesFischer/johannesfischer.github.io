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
      }
    });
    // 3. Where we tell Grunt we plan to use this plug-in.
    grunt.loadNpmTasks('grunt-contrib-concat');
    // 4. Where we tell Grunt what to do when we type "grunt" into the terminal.
    grunt.registerTask('default', ['concat']);
};