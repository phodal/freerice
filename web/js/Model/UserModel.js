"use strict";

define(['backbone', "config"], function(Backbone, config) {
    var User = Backbone.Model.extend({
        initialize : function(username) {
            this.username = username;
        },
        defaults:{
            username:null
        }
    });

    var UserModel = Backbone.Collection.extend({
        default: {
            username:null
        },
        initialize : function(models, options) {
            this.user = new User(this.get('username'));
            this.username = options.username;
        },
        model: User,
        urlRoot: config.localhost + '/account/name/',
        "url": function () {
            return this.urlRoot + this.username;
        }
    });

    return UserModel;
});