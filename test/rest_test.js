var http           = require('http');
var bl             = require('bl');
var restify        = require('restify');

describe('Get Data Test', function () {
    before(function() {

    });

    it('should return 200 when start rest server', function (done) {
        http.get('http://localhost:8080/', function (res) {
            assert(200, res.statusCode);
            done();
        });
    });

    it('should return at least one account on /all/account', function (done) {
        http.get('http://localhost:8080/all/account', function (res) {
            res.pipe(bl(function(err, data) {
                var json = JSON.parse(data)[0];
                if(json.id === 1){
                    done();
                }
            }));
        });
    });

    it('should return at least one account on /all/rice', function (done) {
        http.get('http://localhost:8080/all/rice', function (res) {
            res.pipe(bl(function(err, data) {
                var json = JSON.parse(data)[0];
                if(json.id === 1){
                    done();
                }
            }));
        });
    });

    it('should return the AdminCat when get by id = 1', function (done) {
        http.get('http://localhost:8080/account/id/1', function (res) {
            res.pipe(bl(function(err, data) {
                var json = JSON.parse(data)[0];
                if(json.id === 1){
                    done();
                }
            }));
        });
    });

    it('should return the AdminCat by account_name', function (done) {
        http.get('http://localhost:8080/account/name/admin', function (res) {
            res.pipe(bl(function(err, data) {
                var json = JSON.parse(data)[0];
                if(json.name === 'admin'){
                    done();
                }
            }));
        });
    });
});

var client = restify.createJsonClient({
    url: 'http://127.0.0.1:8080/',
    version: '*'
});

describe('User Login Test', function() {
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


var client2 = restify.createJsonClient({
    url: 'http://127.0.0.1:8080/',
    version: '*'
});

describe('Create User Test', function() {
    it('should return create success', function (done) {
        client2.post('/account/create', { name: 'user', password: "user", email: "user@phodal.com" }, function(err, req, res, data) {
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

    it('should return Name must be supplied when without name', function (done) {
        client.post('/account/create', {password: "user", email: "user@phodal.com"}, function (err, req, res, data) {
            if (err.message === "Name must be supplied") {
                done();
            }
        });
    });
});