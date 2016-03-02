module.exports = function(grunt) {
  grunt.initConfig({

    concat : {
      options: {
        separator: '\n\n//------------------------------------------\n',
        banner: '\n\n//------------------------------------------\n'
      },
      dist : {
        src: ['components/js/*.js'],
        dest: 'builds/development/js/script.js'
      },
   css: {
       src: 'components/css/*.css',
        dest: 'builds/development/css/main.css'
       }
    }, //concat

    sass: {
      dist: {
        options: {
          style: 'expanded'
        },
        files : [{
          src: 'components/sass/style.scss',
          dest: 'builds/development/css/style.css'
        }]
      }
    }, //sass
    cssmin: {
      target: {
        files: [{
          expand: true,
          cwd: 'components/css/style',
          src: ['*.css', '!*.min.css'],
          dest: 'components/css',
          ext: '.min.css'
        }]
      }
    },
    connect: {
      sever: {
        options: {
          hostname: 'localhost',
          port: 3000,
          base: 'builds/development/',
          livereload: true
        }
      }
    },

    watch: {
      options: {
        spawn: false,
        livereload: true
      },
      scripts: {
        files: ['builds/development/**/*.html',
        'components/scripts/**/*.js',
        'components/css/*.css',
        'components/css/**/*.css',
        'components/sass/**/*.scss'],
        tasks: ['concat', 'sass']
      }
    }


  }); //initConfig

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-wiredep');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.registerTask('default', [ 'cssmin','concat', 'sass', 'connect', 'watch']);

}; //wrapper function
