define([
    'jquery',
    'backbone',
    'underscore',
    'mustache',
    'text!/templates/userProfile.html',
    'js/User_Model'
],function($, Backbone, _, Mustache, userProfileTemplate, User_Model){
    'use strict';
    var HomeView = Backbone.View.extend ({
        el: $("#content"),

        initialize: function(){
            var that = this;
            this.collection = new UserModel({username: window.app.username});
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
                console.log(model.attributes.username);
                if(model.attributes.username !== null ){
                    result.push(model.attributes);
                }
            });
            this.$el.html(Mustache.to_html(userProfileTemplate, result));
        }
    });

    return HomeView;
});