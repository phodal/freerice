define([
    'jquery',
    'backbone',
    'underscore',
    'mustache',
    'text!/templates/userProfile.html',
    'js/UserModel'
],function($, Backbone, _, Mustache, userProfileTemplate, UserModel){
    'use strict';
    var HomeView = Backbone.View.extend ({
        el: $("#content"),

        initialize: function(){
            var that = this;
            this.collection = new UserModel();
            this.collection.fetch({
                data:{ username: window.app.username },
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
            this.$el.html(Mustache.to_html(userProfileTemplate, result));
        }
    });

    return HomeView;
});