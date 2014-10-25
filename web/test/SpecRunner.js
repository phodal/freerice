require.config({
    baseUrl: './',
    paths: {
        'text': '../lib/text',
        jquery: '../lib/jquery-2.1.1.min',
        json: '../lib/require/json',
        router: '../router',
        jasmine: './lib/jasmine-2.0.3/jasmine',
        "jasmine-html": './lib/jasmine-2.0.3/jasmine-html',
        underscore: '../lib/underscore',
        mustache: '../lib/mustache',
        backbone: '../lib/backbone',
        "jquery-cookie": "../lib/jquery.cookie"
    },
    shim: {
        "jquery-cookie": ["jquery"],
        jasmine: {
            exports: 'jasmine'
        },
        'jasmine-html': {
            deps: ['jasmine'],
            exports: 'jasmine'
        },
        underscore: {
            exports: '_'
        }
    }
});

require([
    'jquery',
    'jasmine-html',
    'spec/index'
], function ($, jasmine, index) {
    var jasmineEnv = jasmine.getEnv();
    var htmlReporter = new jasmine.HtmlReporter(jasmineEnv);

    jasmineEnv.addReporter(htmlReporter);
    jasmineEnv.specFilter = function (spec) {
        return htmlReporter.specFilter(spec);
    };

    $(function() {
        require(index.specs, function() {
            jasmineEnv.execute();
        });
    });
});