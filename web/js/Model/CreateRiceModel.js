"use strict";

define(["backbone", "config"], function(Backbone, config) {
    var CreateRice = Backbone.Model.extend({
        defaults: {
            name: null,
            type: null,
            price: null,
            quantity: null,
            description: null
        },
        url: function() {
            return config.localhost + '/rice/create';
        }
    });

    return CreateRice;
});