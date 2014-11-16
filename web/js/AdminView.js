define([
    'jquery',
    'backbone',
    'underscore',
    'mustache',
    'text!/templates/managePage.html',
    'js/lib/Rice',
    'js/Model/RiceModel'
],function($, Backbone, _, Mustache, manageTemplate, Rice, RiceModel){
    'use strict';
    var rice = new Rice();

    var AdminView = Backbone.View.extend ({
        el: $("#content"),

        initialize: function(){
            var that = this;
            this.collection = new RiceModel();
            this.collection.fetch({
                success: function(){
                    that.render();
                }
            });
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
            window.app.navigate('admin', true);
        },
        render: function(){
            this.$el.find("#content").remove();
            var result = [];
            _.each(this.collection.models, function(model){
                if(model.attributes.quantity !== 0 ){
                    result.push(model.attributes);
                }
            });
            this.$el.html(Mustache.to_html(manageTemplate, result));
        }
    });

    return AdminView;
});