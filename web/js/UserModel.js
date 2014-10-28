var UsersModel = Backbone.Model.extend({
    initialize: function(attributes, options) {
        'use strict';
        this.username = options.username;
    }
});

var UserModel = Backbone.Collection.extend({
    model: UsersModel,
    url: 'http://localhost:8080/account/name/',
    parse: function(data) {
        'use strict';
        return data;
    }
});
