define([
    'jquery',
    'underscore',
    'mustache',
    'text!/templates/login.html',
    'js/lib/User',
    'js/lib/UserSession'
],function($, _, Mustache, loginTemplate, User, UserSession){
    'use strict';
    var user = new User();

    var LoginView = Backbone.View.extend ({
        el: $("#content"),

        initialize: function(){

        },
        events: {
            "click #login": "login"
        },
        login: function(event){
            event.preventDefault();
            var userInfo = {
                name: $('#username').val(),
                password: $('#password').val()
            };
            user.login(userInfo, function(){
                UserSession.save({
                    name: userInfo.name,
                    accessToken: userInfo.name
                });
                window.app.navigate('userProfile', true);
            });
        },
        render: function(){
            this.$el.html(Mustache.to_html(loginTemplate, {data:"data"}));
        }
    });

    return LoginView;
});