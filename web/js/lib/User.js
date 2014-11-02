define([
    'jquery',
    'underscore',
    'mustache',
    'js/lib/UserSession',
    'js/Model/CreateAccount_Model',
    'js/Model/User_Login'
],function($, _, Mustache, UserSession, CreateAccount, LoginAccount){
    'use strict';
    function User(){

    }
    User.prototype.login = function(userObject, callback) {
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
                    console.log("login success");
                } else {

                }
            },
            error: function(model, response) {
            }
        });
    };

    return User;
});