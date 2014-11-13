var Browser = require('zombie');

describe("Function Test", function() {
    var browser = new Browser({ site: "http://0.0.0.0:8080/" });

    it("should load the home page", function(done) {
        browser.visit('/', function (error) {
            assert.ifError(error);
            browser.assert.success();
        });
        done();
    });

    it('should be on login page', function(done) {
        browser.visit('#account/login')
            .then(function() {
                assert.equal(browser.location.href, 'http://0.0.0.0:8080/#account/login', 'It is not the Login page');
                assert.ok(browser.success, 'It did not load successfully.');
            })
            .then(done, done);
    });

    it('should redirect to user profile after login', function(done) {
        browser.visit('#account/login')
            .then(function() {
                browser.fill('input[name=username]', 'admin');
                browser.fill('input[name=password]', 'admin');
                browser.pressButton("Sign in", function() {
                    if(browser.location.href === 'http://0.0.0.0:8080/#userProfile'){
                        done();
                    }
                });
            });
    });

    it('should redirect to homepage after logout', function(done) {
        browser.visit('#account/logout')
            .then(function() {
                console.log(browser.location.href);
                if(browser.location.href === 'http://0.0.0.0:8080/#'){
                    done();
                }
            });
    });
});

