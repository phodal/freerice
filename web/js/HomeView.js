define([
    'jquery',
    'backbone',
    'underscore',
    'mustache',
    'text!/templates/homepage_detail.html',
    'js/Model/RiceModel'
],function($, Backbone, _, Mustache, homepageTemplate, Rices){
    'use strict';
    var HomeView = Backbone.View.extend ({
        el: $("#content"),

        initialize: function(){
            var that = this;
            this.collection = new Rices();
            this.collection.fetch({
                success: function(){
                    that.render();
                }
            });
        },
        render: function(){
            this.$el.find("#content").remove();
            var result = [];
            _.each(this.collection.models, function(model){
                if(model.attributes.quantity !== 0 ){
                    result.push(model.attributes);
                }
            });
            this.$el.html(Mustache.to_html(homepageTemplate, result));
        }
    });

    return HomeView;
});