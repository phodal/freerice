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
        render: function(){
            console.log('login');
            this.$el.html(Mustache.to_html(createAccountTemplate, {data:"data"}));
        }
    });

    return LoginView;
});