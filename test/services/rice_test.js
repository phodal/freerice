var http           = require('http');
var restify        = require('restify');

var client = restify.createJsonClient({
    url: 'http://127.0.0.1:8080/',
    version: '*'
});

describe('Create Rice Test', function() {
    it('should return create rice success', function (done) {
        client.post('/rice/create', {
            name: "rice name",
            type: "rice type",
            price: 12,
            quantity: 12,
            description: "description"
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

    it('should return String must be supplied when without type', function (done) {
        client.post('/rice/create', {
            name: "rice name",
            price: 12,
            quantity: 12,
            description: "description"
        }, function (err, req, res, data) {
            if (err.message === "String must be supplied") {
                res.destroy();
                done();
            }
        });
    });
});
