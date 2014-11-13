define([
    'jquery',
    'backbone',
    'underscore',
    'mustache',
    'text!/templates/userProfile.html',
    'js/Model/UserModel',
    'js/lib/UserSession'
],function($, Backbone, _, Mustache, userProfileTemplate, UserModel, UserSession){
    'use strict';
    var HomeView = Backbone.View.extend ({
        el: $("#content"),

        initialize: function(){
            var that = this;
            this.collection = new UserModel([], {username: UserSession.principal()});
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
                if(model.username !== null ){
                    result.push(model.attributes);
                }
            });
            this.$el.html(Mustache.to_html(userProfileTemplate, result));
        }
    });

    return HomeView;
});