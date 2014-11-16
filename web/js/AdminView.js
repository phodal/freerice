define([
    'jquery',
    'backbone',
    'underscore',
    'mustache',
    'text!/templates/manageRice.html',
    'js/Model/RiceModel'
],function($, Backbone, _, Mustache, manageRiceTemplate, Rices){
    'use strict';
    var AdminView = Backbone.View.extend ({
        el: $("#content"),

        initialize: function(){

        },
        render: function(){
            this.$el.find("#content").remove();
            this.$el.html(Mustache.to_html(manageRiceTemplate, {data:"data"}));
        }
    });

    return AdminView;
});