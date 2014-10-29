define([
    'jquery',
    'underscore',
    'mustache',
    'js/lib/UserSession',
    'js/Model/CreateAccount_Model'
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
                    callback();
                } else {
                }
            },
            error: function(model, response) {
                callback();
            }
        });
    };

    User.prototype.create = function(userObject) {

        var login = new CreateAccount({
            name: userObject.name,
            email: userObject.email,
            password: userObject.password
        });

        login.save({}, {
            success: function(model, response) {
                if(response.status === "success"){
                    console.log("success");
                } else {

                }
            },
            error: function(model, response) {
            }
        });
    };

    return User;
});