define([
    'jquery',
    'underscore',
    'mustache',
    'text!/templates/userProfile.html',
    'js/UserSession'
],function($, _, Mustache, userProfileTemplate, UserSession){
    'use strict';
    var ItemsModel = Backbone.Model.extend({});
    var Items = Backbone.Collection.extend({
        model: ItemsModel,
        url: 'http://localhost:8080/account/name/admin',
        parse: function(data) {
            return data;
        }
    });

    var HomeView = Backbone.View.extend ({
        el: $("#content"),

        initialize: function(){
            var that = this;
            this.collection = new Items();
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
            this.$el.html(Mustache.to_html(userProfileTemplate, result));
        }
    });

    return HomeView;
});