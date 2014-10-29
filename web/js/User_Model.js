var UsersModel = Backbone.Model.extend({
    defaults:{
        username:null
    }
});

var UserModel = Backbone.Collection.extend({
    model: UsersModel,
    initialize : function(options) {
        'use strict';
        this.username = options.username;
    },
    url: 'account/name/' + this.username
});
