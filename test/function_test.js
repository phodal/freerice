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

    it("should login", function(done) {
        browser.visit('/#account/login', function (error) {
            assert.ifError(error);
            browser.assert.success();
        });
        done();
    });

});

