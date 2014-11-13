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
            return !_.isEmpty($.cookie('accessToken')) && $.cookie('accessToken')!== null ;
        },
        principal: function() {
            return $.cookie('name');
        },
        save: function(authHash){
            $.cookie('name', authHash.name, { expires: 0.5 });
            $.cookie('accessToken', authHash.accessToken, { expires: 0.5 });
        },
        remove: function(){
            $.removeCookie('name');
            $.removeCookie('accessToken');
        },
        load: function(){
            this.userName = $.cookie('name');
            this.accessToken = $.cookie('accessToken');
        }
    });

    return new UserSession();
});