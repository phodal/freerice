define([
    'jquery',
    'underscore',
    'backbone',
    'router'
], function($, _, Backbone, Router){

    var initialize = function(){
        new Router();
    };

    return {
        initialize: initialize
    };
});
