module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    sass: {
      dist: {
        options: {
          style: 'expanded'
        },
        files: {
          'assets/css/build/styles.css': 'assets/css/dev/main.scss'
        }
      }
    },
    concat: {
      css: {
        src: [
          'assets/bower_components/normalize.css/normalize.css',
          'assets/css/build/styles.css'
        ],
        dest: 'assets/css/build/styles.css'
      },
      js: {
        src: [
          'assets/bower_components/zepto/zepto.min.js',
          'assets/bower_components/velocity/velocity.min.js',
          'assets/javascript/dev/script.js'
        ],
        dest: 'assets/javascript/build/script.js'
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
    },
    uglify: {
      build: {
        src: 'assets/javascript/build/script.js',
        dest: 'assets/javascript/build/script.min.js'
      }
    },
    watch: {
      scripts: {
        files: ['assets/javascript/dev/*.js'],
        tasks: ['concat', 'uglify'],
        options: {
            spawn: false,
        },
      },
      styles: {
        files: ['assets/css/dev/*.scss'],
        tasks: ['sass', 'concat', 'cssmin'],
        options: {
            spawn: false,
        },
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['sass', 'concat', 'cssmin', 'uglify']);
};