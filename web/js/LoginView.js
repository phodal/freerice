define([
    'jquery',
    'underscore',
    'mustache',
    'text!/templates/login.html',
    'js/User'
],function($, _, Mustache, loginTemplate, User){
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
            user.login(userInfo);
        },
        render: function(){
            this.$el.html(Mustache.to_html(loginTemplate, {data:"data"}));
        }
    });

    return LoginView;
});