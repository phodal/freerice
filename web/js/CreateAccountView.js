define([
    'jquery',
    'underscore',
    'mustache',
    'text!/templates/create.html'
],function($, _,  Mustache, createAccountTemplate){
    'use strict';
    var LoginView = Backbone.View.extend ({
        el: $("#content"),

        initialize: function(){
            console.log('login');
        },
        events: {
            "click #createAccont": "create_account"
        },
        create_account: function(event){
            event.preventDefault();
            console.log("create_account");
        },
        render: function(){
            this.$el.html(Mustache.to_html(createAccountTemplate, {data:"data"}));
        }
    });

    return LoginView;
});