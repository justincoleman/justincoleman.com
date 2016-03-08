Getting Started with Grunt
===========================

Step 1: Install Node and Grunt.

 - Install Node.JS if you haven't already (http://nodejs.org/)
 - Create a file at the root level of your projects directory called 'package.json'
 - In that file include this information:
    {
      "name": "project-title",
      "version": "0.1.0",
      "devDependencies": {
        "grunt": "~0.4.1"
      }
    }
 - Now open Terminal and 'cd' to your project directory.
 - Run this command 'npm install'
 - Check for this folder in your project 'node_modules'
 - Now run this command 'npm install -g grunt-cli'

Step 2: Create your Gruntfile

 - Create another new file at the root level of your project called 'Gruntfile.js'; this is case-sensitive.
 - Copy this information into that file:

    module.exports = function(grunt) {

      // Utility to load the different option files
      // based on their names
      function loadConfig(path) {
        var glob = require('glob');
        var object = {};
        var key;

        glob.sync('*', {cwd: path}).forEach(function(option) {
          key = option.replace(/\.js$/,'');
          object[key] = require(path + option);
        });

        return object;
      }

      // Initial config
      var config = {
        pkg: grunt.file.readJSON('package.json')
      }

      // Load tasks from the tasks folder
      grunt.loadTasks('tasks');

      // Load all the tasks options in tasks/options base on the name:
      // watch.js => watch{}
      grunt.util._.extend(config, loadConfig('./tasks/options/'));

      grunt.initConfig(config);

      require('load-grunt-tasks')(grunt);

      // Default Task is basically a rebuild
      grunt.registerTask('default', ['concat', 'uglify', 'sass', 'imagemin', 'autoprefixer', 'cssmin']);

      // Moved to the tasks folder:
      // grunt.registerTask('dev', ['connect', 'watch']);

    };

Step 3: Install your Grunt tasks.

 - Run the following commands in Terminal to install all of the necessary tasks needed for your project:


    npm install load-grunt-tasks --save-dev
    npm install glob --save-dev
    npm install grunt-contrib-watch --save-dev
    npm install grunt-autoprefixer --save-dev
    npm install grunt-contrib-concat --save-dev
    npm install grunt-contrib-connect --save-dev
    npm install grunt-contrib-cssmin --save-dev
    npm install grunt-contrib-imagemin --save-dev
    npm install grunt-contrib-jshint --save-dev
    npm install grunt-contrib-sass --save-dev
    npm install grunt-contrib-uglify --save-dev
    npm install grunt-contrib-jade --save-dev

 - If you need another task, this is a good place to start your search: https://github.com/gruntjs/grunt-contrib