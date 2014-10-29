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
  baseUrl: '/base',
  paths: {
    'text': 'web/lib/text/text',
    jquery: 'web/lib/jquery/dist/jquery.min',
    json: 'web/lib/require/json',
    router: 'web/router',
    jasmine: 'web/test/lib/jasmine-2.0.3/jasmine',
    "jasmine-html": 'web/test/lib/jasmine-2.0.3/jasmine-html',
    boot: 'web/test/lib/jasmine-2.0.3/boot',
    underscore: 'web/lib/underscore/underscore',
    mustache: 'web/lib/mustache/mustache',
    backbone: 'web/lib/backbone/backbone',
    "jquery-cookie": "web/lib/jquery.cookie/jquery.cookie"
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
