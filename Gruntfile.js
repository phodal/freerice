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
            baseUrl: './',
            paths: {
              'text': 'web/lib/text/text',
              jquery: 'web/lib/jquery/dist/jquery.min',
              json: 'web/lib/require/json',
              router: 'web/router',
              underscore: 'web/lib/underscore/underscore',
              mustache: 'web/lib/mustache/mustache',
              backbone: 'web/lib/backbone/backbone',
              "jquery-cookie": "web/lib/jquery.cookie/jquery.cookie"
            },
            shim: {
              "jquery-cookie": ["jquery"],
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

  grunt.registerTask('test', ['jasmine']);
  grunt.registerTask('default', ['test']);
};
