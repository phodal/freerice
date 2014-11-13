"use strict";

define(["backbone", "config"], function(Backbone, config) {
    var CreateAccount = Backbone.Model.extend({
        defaults: {
            name: null,
            email: null,
            password: null
        },
        url: function() {
            return config.localhost + '/account/create';
        }
    });

    return CreateAccount;
});
