var DB      = require("./db_mapper");
var db      = new DB();
var _       = require("underscore");
var restify = require("restify");
var bcrypt  = require('bcrypt');

function encryptPassword(password, cb) {
    bcrypt.genSalt(10, function (err, salt) {
        bcrypt.hash(password, salt, function(err, hash) {
            cb(null, hash);
        });
    });
};

function Authenticate() {
    'use strict';
    return;
}

Authenticate.prototype.login = function (req, res, next) {
    'use strict';
    var account = req.params;

    if (account.name === undefined) {
        return next(new restify.InvalidArgumentError('Name must be supplied'));
    }

    db.getByName(account.name, function (result) {
        bcrypt.compare(account.password, _.first(result).password, function(err, success) {
            if (success) {
                res.send({status: "success"});
                next();
            } else {
                res.send({status: "fail"});
                next();
            }
        });
    });
};

Authenticate.prototype.create = function (req, res, next) {
    'use strict';

    var account = req.params;
    if (account.name === undefined || account.password === undefined || account.email === undefined) {
        return next(new restify.InvalidArgumentError('Name must be supplied'));
    }

    encryptPassword(account.password, function (err, password) {
        if (err) {
            throw new Error(err);
        }
    });

    db.createAccount(req.params, function (result) {
        if (result.status === "success") {
            res.send({status: "success"});
            next();
        } else {
            result = _.extend(result, {status: "fail"});
            res.send(result);
            next();
        }

        account.password = password;
    });

};


module.exports = Authenticate;