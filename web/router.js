"use strict";

define([
    'jquery',
    'underscore',
    'backbone',
    'js/HomeView.js',
    'js/LoginView.js',
    'js/CreateAccountView.js',
    'js/lib/User.js',
    'js/UserProfileView.js',
    'js/lib/UserSession.js',
    'js/lib/Logout.js',
    'js/AdminView'
],function($, _, Backbone, HomeView, LoginView, CreateAccountView, User, UserProfileView, UserSession, Logout, AdminView){
    var AppRouter = Backbone.Router.extend({
        index: function(){
            var homeView = new HomeView();
            homeView.initialize();
        },
        createAccount: function(){
            var createAccountView = new CreateAccountView();
            createAccountView.render();
        },
        login: function(){
            var loginView = new LoginView();
            loginView.render();
        },
        logout: function(){
            var logout = new Logout();
            logout.logout();
            this.navigate('/', true);
        },
        admin: function(){
            if(UserSession.authenticated() !== true ){
                this.navigate('login', true);
            }
            var adminView = new AdminView();
            adminView.render();
        },
        userProfile: function(){
            if (UserSession.authenticated() === true) {
                var userProfileView = new UserProfileView();
                userProfileView.render();
            } else {
                this.navigate('account/login', true);
                Backbone.history.loadUrl();
            }
        },
        initialize: function() {
            var router = this,
                routes = [
                    [ /^.*$/, "index" ],
                    [ "account/create", "createAccount" ],
                    [ "account/login", "login" ],
                    [ "account/logout", "logout" ],
                    [ "userProfile", "userProfile" ],
                    [ "admin", "admin" ]
                ];

            _.each(routes, function(route) {
                router.route.apply(router,route);
            });
            Backbone.history.stop();
            Backbone.history.start();
        }
    });

    window.app = new AppRouter();
    return AppRouter;
});