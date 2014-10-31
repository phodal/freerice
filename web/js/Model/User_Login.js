define(['backbone'], function(Backbone) {
    var LoginAccount = Backbone.Model.extend({
        defaults: {
            name: null,
            password: null
        },
        url: function () {
            return 'http://localhost:8080/login/user';
        }
    });

    return LoginAccount;
});