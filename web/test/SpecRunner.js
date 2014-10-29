require.config({
    baseUrl: './',
    paths: {
        'text': '../lib/text/text',
        jquery: '../lib/jquery/dist/jquery.min',
        json: '../lib/require/json',
        router: '../router',
        jasmine: './lib/jasmine-2.0.3/jasmine',
        "jasmine-html": './lib/jasmine-2.0.3/jasmine-html',
        boot: './lib/jasmine-2.0.3/boot',
        underscore: '../lib/underscore/underscore',
        mustache: '../lib/mustache/mustache',
        backbone: '../lib/backbone/backbone',
        "jquery-cookie": "../lib/jquery.cookie/jquery.cookie"
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
    }
});

var specs = [
    './spec/UserSessionSpec'
];

require(['boot'], function () {
    require(specs, function () {
        window.onload();
    });
});