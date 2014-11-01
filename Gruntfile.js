module.exports = function (grunt) {
  "use strict";

  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json')
    , jasmine: {
      src: "web/test/lib/*.js"
      , options: {
        specs: "web/test/spec/*Spec.js",
        template: require('grunt-template-jasmine-requirejs'),
        templateOptions:{
          requireConfig: {
            baseUrl: './web',
            paths: {
              'text': 'lib/text/text',
              jquery: 'lib/jquery/dist/jquery.min',
              json: 'lib/require/json',
              router: 'router',
              underscore: 'lib/underscore/underscore',
              mustache: 'lib/mustache/mustache',
              backbone: 'lib/backbone/backbone',
              "jquery-cookie": "lib/jquery.cookie/jquery.cookie",
              "jasmine-jquery": "lib/jasmine-jquery/lib/jasmine-jquery",
              sinon: "lib/sinon/lib/sinon"
            },
            shim: {
              "jquery-cookie": ["jquery"],
              backbone: {
                exports:"Backbone"
              },
              underscore: {
                exports: '_'
              }
            }
          }
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jasmine');
  grunt.registerTask('server', 'Start a custom web server.', function() {
    grunt.log.writeln('Starting web server on port 8080.');
    require('./server/app.js');
  });
  grunt.registerTask('default', ['server','jasmine']);
};
