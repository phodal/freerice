var http           = require('http');
var restify        = require('restify');
var request        = require('request');

var client = restify.createJsonClient({
    url: 'http://127.0.0.1:8080/',
    version: '*'
});

var client2 = restify.createJsonClient({
    url: 'http://127.0.0.1:8080/',
    version: '*'
});

describe('Create User Test', function() {
    it('should return create success', function (done) {
        client2.post('/account/create', {
            name: 'user',
            password: "user",
            email: "user@phodal.com"
        }, function (err, req, res, data) {
            if (err) {
                throw new Error(err);
            }
            else {
                if (data.status != "success") {
                    throw new Error('create failed');
                }
                res.destroy();
                done();
            }
        });
    });

    it('should return Name must be supplied when without name', function (done) {
        client.post('/account/create', {password: "user", email: "user@phodal.com"}, function (err, req, res, data) {
            if (err.message === "Name must be supplied") {
                res.destroy();
                done();
            }
        });
    });
});

describe('Visit Test', function() {
    it('should return 404 when visit the /account/create', function (done) {
        request('http://127.0.0.1:8080/account/create', function (error, response, body) {
            if (response.statusCode === 404) {
                done();
            }
        });
    });

    it('should return 404 when visit the /account/create', function (done) {
        request('http://127.0.0.1:8080/account/create', function (error, response, body) {
            if (JSON.parse(body).code === "ResourceNotFound") {
                done();
            }
        });
    });
});

describe('Create User Test', function() {
    it('should return Name must be supplied when name repeat', function(done) {
        request.post({url:'http://127.0.0.1:8080/account/create',
                form: { name: "admin", password: "user", email: "newuser@phodal.com" }},
            function(err, httpResponse, body){
                if (err) {
                    throw new Error(err);
                }
                else {

                    if (JSON.parse(body).error === "user exist") {
                        done();
                    }
                }
            });
    });
});