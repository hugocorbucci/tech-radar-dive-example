module.exports = function(grunt) {
  grunt.initConfig({
    jshint: {
      src: ['Gruntfile.js', 'src/**/*.js', 'tests/**/*.js']
    },
    mocha: {
      test: {
        src: ['tests/**/*.html'],
        options: {
          run: true
        }
      }
    },
    watch: {
      files: ['Gruntfile.js', 'src/**/*.js', 'tests/**/*.js', 'tests/**/*.html'],
      tasks: ['default']
    }
  });
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-mocha');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['jshint', 'mocha']);
};
