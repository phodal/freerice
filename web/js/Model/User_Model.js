define(['backbone'], function(Backbone) {
    var User = Backbone.Model.extend({
        initialize : function(username) {
            'use strict';
            this.username = username;
        },
        defaults:{
            username:null
        }
    });

    var UserModel = Backbone.Collection.extend({
        default: {
            username:null
        },
        initialize : function(models, options) {
            'use strict';
            this.user = new User(this.get('username'));
            this.username = options.username;
        },
        model: User,
        urlRoot: 'http://0.0.0.0:8080/account/name/',
        "url": function () {
            return this.urlRoot + this.username;
        }
    });

    return UserModel;
});