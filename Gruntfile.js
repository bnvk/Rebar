
/**
 * @description watch less, compile and minify
 */

module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    less: {
      development: {
        options: {
          paths: ['less'],
          yuicompress: false
        },
        files: {
          'css/app.css':'less/app.less'
        }
      }
    },
    cssmin: {
      compress: {
        files: {
          'css/app.min.css': ['css/app.css']
        }
      }
    },
    watch: {
      styles: {
        files: [
          'less/**/*.less'
        ],
        tasks: ['less']
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-cssmin');

  grunt.registerTask('build', ['less','cssmin']);
  grunt.registerTask('default', ['less','watch']);

};
