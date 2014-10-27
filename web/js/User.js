define([
    'jquery',
    'underscore',
    'mustache',
    'js/UserSession'
],function($, _, Mustache, UserSession){
    'use strict';
    function User(){

    }
    User.prototype.login = function(userObject, callback) {
        var LoginAccount = Backbone.Model.extend({
            defaults: {
                name: null,
                password: null
            },
            url: function() {
                return 'http://localhost:8080/login/user';
            }
        });

        var that = this;
        var login = new LoginAccount({
            name: userObject.name,
            password: userObject.password
        });

        login.save({}, {
            success: function(model, response) {
                if(response.status === "success"){
                    var name = userObject.name;
                    UserSession.save({
                        "name": name,
                        "accessToken": response.accessToken
                    });
                    console.log(UserSession);
                    callback();
                    that.setToken("success");
                } else {
                    that.removeToken();
                }
            },
            error: function(model, response) {
                callback();
            }
        });
    };

    User.prototype.create = function(userObject) {
        var LoginAccount = Backbone.Model.extend({
            defaults: {
                name: null,
                email: null,
                password: null
            },
            url: function() {
                return 'http://localhost:8080/account/create';
            }
        });

        var that = this;
        var login = new LoginAccount({
            name: userObject.name,
            email: userObject.email,
            password: userObject.password
        });

        login.save({}, {
            success: function(model, response) {
                if(response.status === "success"){
                    console.log("success");
                } else {
                    that.removeToken();
                }
            },
            error: function(model, response) {
            }
        });
    };

    return User;
});