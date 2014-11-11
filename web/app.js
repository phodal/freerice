"use strict";

define([
    'jquery',
    'underscore',
    'backbone',
    'router'
], function($, _, Backbone, Router){

    var initialize = function(){
        this.router = new Router();
    };

    return {
        initialize: initialize
    };
});
