var Browser = require('zombie');
var _       = require('underscore');
var website = "http://0.0.0.0:8080/";

describe("Function Test", function () {
    describe("Authenticate", function () {
        var browser = new Browser({ site: website });

        it("should load the home page", function(done) {
            browser.visit('/', function (error) {
                assert.ifError(error);
                browser.assert.success();
            });
            done();
        });

        it('should be on login page', function(done) {
            browser.visit('#/account/login')
                .then(function() {
                    assert.equal(browser.location.href, website + '#/account/login', 'It is not the Login page');
                    assert.ok(browser.success, 'It did not load successfully.');
                })
                .then(done, done);
        });

        it('should redirect to user profile after login', function(done) {
            browser.visit('#/account/login')
                .then(function() {
                    browser.fill('input[name=username]', 'admin');
                    browser.fill('input[name=password]', 'admin');
                    browser.pressButton("Sign in", function() {
                        if(browser.location.href === website + '#userProfile'){
                            done();
                        }
                    });
                });
        });

        it('should redirect to homepage after logout', function(done) {
            browser.visit('#/account/logout')
                .then(function() {
                    if(browser.location.href === website + '#'){
                        done();
                    }
                });
        });
    });
    describe("Create Account", function () {
        var browser = new Browser({ site: website });
        var randomNumber = _.random(1, 1000);
        var userName = 'user' + randomNumber;

        it("should redirect to login in page after create account", function () {
            browser.visit('#account/create')
                .then(function() {
                    browser.fill('input[name=name]', userName);
                    browser.fill('input[name=password]', userName);
                    browser.fill('input[name=email]', userName + "@gmail.com");
                    browser.pressButton("Sign in", function() {
                        if(browser.location.href === website + '#/account/login'){
                            done();
                        }
                    });
                });
        });

        it("should login with created user", function () {
            browser.visit('#/account/login')
                .then(function() {
                    browser.fill('input[name=username]', userName);
                    browser.fill('input[name=password]', userName);
                    browser.pressButton("Sign in", function() {
                        if(browser.location.href === website + '#userProfile'){
                            done();
                        }
                    });
                });
        });
    });
});
