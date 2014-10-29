var allTestFiles = [];
var TEST_REGEXP = /(spec|test)\.js$/i;

var pathToModule = function(path) {
  return path.replace(/^\/base\//, '').replace(/\.js$/, '');
};

Object.keys(window.__karma__.files).forEach(function(file) {
  if (TEST_REGEXP.test(file)) {
    // Normalize paths to RequireJS module names.
    allTestFiles.push(pathToModule(file));
  }
});

require.config({
  // Karma serves files under /base, which is the basePath from your config file
  baseUrl: './',
  paths: {
    'text': '../lib/text/text',
    jquery: '../lib/jquery/dist/jquery.min.js',
    json: '../lib/require/json',
    router: '../router',
    jasmine: 'lib/jasmine-2.0.3/jasmine',
    "jasmine-html": 'lib/jasmine-2.0.3/jasmine-html',
    boot: 'lib/jasmine-2.0.3/boot',
    underscore: '../lib/underscore/underscore',
    mustache: '../lib/mustache/mustache',
    backbone: '../lib/backbone/backbone',
    "jquery-cookie": "../lib/jquery.cookie/jquery.cookie.js"
  },
  shim: {
    "jquery-cookie": ["jquery"],
    'jasmine': {
      exports: 'window.jasmineRequire'
    },
    'jasmine-html': {
      deps: ['jasmine'],
      exports: 'window.jasmineRequire'
    },
    'boot': {
      deps: ['jasmine', 'jasmine-html'],
      exports: 'window.jasmineRequire'
    },
    underscore: {
      exports: '_'
    }
  },
  // dynamically load all test files
  deps: allTestFiles,

  // we have to kickoff jasmine, as it is asynchronous
  callback: window.__karma__.start
});
