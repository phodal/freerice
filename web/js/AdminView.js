define([
    'jquery',
    'backbone',
    'underscore',
    'mustache',
    'text!/templates/manageRice.html',
    'js/lib/Rice'
],function($, Backbone, _, Mustache, manageRiceTemplate, Rice){
    'use strict';
    var rice = new Rice();

    var AdminView = Backbone.View.extend ({
        el: $("#content"),

        initialize: function(){

        },
        events: {
            "click #createRice": "create_rice"
        },
        create_rice: function(event){
            event.preventDefault();
            var riceInfo = {
                name: $('input[name="name"]').val(),
                type: $('input[name="type"]').val(),
                price: $('input[name="price"]').val(),
                quantity: $('input[name="quantity"]').val(),
                description: $('input[name="description"]').val()
            };
            rice.create(riceInfo);
            window.app.navigate('/', true);
        },
        render: function(){
            this.$el.find("#content").remove();
            this.$el.html(Mustache.to_html(manageRiceTemplate, {data:"data"}));
        }
    });

    return AdminView;
});