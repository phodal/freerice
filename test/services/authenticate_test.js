var http           = require('http');
var restify        = require('restify');

var client = restify.createJsonClient({
    url: 'http://127.0.0.1:8080/',
    version: '*'
});

describe('Authenticate Test', function() {
    it('should return login success', function(done) {
        client.post('/login/user', { name: 'admin', password: "admin" }, function(err, req, res, data) {
            if (err) {
                throw new Error(err);
            }
            else {
                if (data.status != "success") {
                    throw new Error('login failed');
                }
                done();
            }
        });
    });

    it('should return login failed', function(done) {
        client.post('/login/user', { name: 'admin', password: "noadmin" }, function(err, req, res, data) {
            if (err) {
                throw new Error(err);
            }
            else {
                if (data.status == "fail") {
                    done();
                }
            }
        });
    });

    it('should return login failed when lost user name', function(done) {
        client.post('/login/user', { password: "noadmin" }, function(err, req, res, data) {
            if (err.message = "Name must be supplied") {
                done();
            }
        });
    });

});