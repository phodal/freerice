define([
    'jquery',
    'underscore',
    'mustache',
    'js/localStorage',
    'js/UserSession'
],function($, _, Mustache, localStorage, UserSession){
    'use strict';
    function User( router ){
        this.router = router;
        this.loggedIn = this.hasToken();
        this.email = localStorage.getPropertyFromItem("visitorDetails", "email") || localStorage.getItem("user-email");
    }
    User.prototype.hasToken = function(){
        return (localStorage.getItem("authenticationToken")) ?  true : false;
    };
    User.prototype.setToken = function(token){
        localStorage.setItem("authenticationToken",token);
        this.token = token;
    };

    User.prototype.removeToken = function(){
        localStorage.removeItem("authenticationToken");
        this.token = "";
    };

    User.prototype.login = function(userObject) {
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
                    that.setToken("success");
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