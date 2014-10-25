require.config({
    baseUrl: '/',
    paths: {
        'text': 'lib/text',
        jquery: 'lib/jquery-2.1.1.min',
        json: 'lib/require/json',
        router: 'router',
        underscore: 'lib/underscore',
        mustache: 'lib/mustache',
        backbone: 'lib/backbone',
        "jquery-cookie": "lib/jquery.cookie"
    },
    shim: {
        "jquery-cookie": ["jquery"],
        underscore: {
            exports: '_'
        }
    }
});

require(['app'], function(App){
    App.initialize();
});