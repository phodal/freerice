define([
    'jquery',
    'underscore',
    'backbone',
    'jquery-cookie'
],function($, _, Backbone){
    'use strict';
    var UserSession = Backbone.Model.extend({
        defaults: {
            'accessToken': null,
            "userName": null
        },
        initialize: function(){
            this.load();
        },
        authenticated: function(){
            return !_.isEmpty($.cookie('accessToken'));
        },
        save: function(authHash){
            $.cookie('name', authHash.name);
            $.cookie('accessToken', authHash.accessToken);
        },
        load: function(){
            this.userName = $.cookie('name');
            this.accessToken = $.cookie('accessToken');
        }
    });

    return new UserSession();
});