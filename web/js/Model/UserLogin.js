"use strict";

define(["backbone", "config"], function(Backbone, config) {
    var LoginAccount = Backbone.Model.extend({
        defaults: {
            name: null,
            password: null
        },
        url: function () {
            return config.localhost + '/login/user';
        }
    });

    return LoginAccount;
});