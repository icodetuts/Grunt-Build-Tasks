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
    } //concat


  }); //initConfig

  grunt.loadNpmTasks('grunt-contrib-concat');

  grunt.registerTask('default', ['concat']);

}; //wrapper function