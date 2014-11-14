var http           = require('http');
var bl             = require('bl');

describe('RESTful GET Test', function () {
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