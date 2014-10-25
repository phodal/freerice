require.config({
    baseUrl: '../',
    paths: {
        'text': './lib/text',
        jquery: './lib/jquery-2.1.1.min',
        json: './lib/require/json',
        router: './router',
        jasmine: './test/lib/jasmine-2.0.3/jasmine',
        "jasmine-html": './test/lib/jasmine-2.0.3/jasmine-html',
        boot: './test/lib/jasmine-2.0.3/boot',
        underscore: './lib/underscore',
        mustache: './lib/mustache',
        backbone: './lib/backbone',
        "jquery-cookie": "./lib/jquery.cookie"
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
    './test/spec/UserSessionSpec'
];

require(['boot'], function () {
    require(specs, function () {
        window.onload();
    });
});