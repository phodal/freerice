define([
    'jquery',
    'underscore',
    'backbone',
    'js/HomeView.js',
    'js/LoginView.js',
    'js/CreateAccountView.js',
    'js/User.js',
    'js/UserProfileView.js',
    'js/UserSession.js'
],function($, _, Backbone, HomeView, LoginView, CreateAccountView, User, UserProfileView, UserSession){

    var AppRouter = Backbone.Router.extend({
        routes: {
            'index': 'homePage',
            'account/create': 'Create',
            'account/login': 'Login',
            'admin': 'admin',
            'userProfile': 'userProfile',
            'userProfile/*userName': 'userProfile',
            '*actions': 'defaultAction'
        }
    });
    var initialize = function() {
        var router = new AppRouter;

        router.on('route:homePage', function() {
            new HomeView();
        });

        router.on('route:Create', function() {
            var createAccountView = new CreateAccountView();
            createAccountView.render();
        });

        router.on('route:Login', function() {
            var loginView = new LoginView();
            loginView.render();
        });


        router.on('route:admin', function(action) {
            console.log(UserSession.authenticated());
            if(UserSession.authenticated() !=true ){
                router.navigate('account/login', true)
            }
        });

        router.on('route:userProfile', function(action) {
            console.log(UserSession);
            if (UserSession.authenticated() == true) {
                var userProfileView = new UserProfileView();
                userProfileView.render();
            } else {
                router.navigate('account/login', true)
            }
        });

        router.on('route:defaultAction', function(actions){
            new HomeView();
            console.log('No route:', actions);
        });

        Backbone.history.start();
    };
    return {
      initialize: initialize
    };
});