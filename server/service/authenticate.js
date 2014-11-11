var AccountMapper  = require("./../mapper/account_mapper");
var _              = require("underscore");
var restify        = require("restify");
var bcrypt         = require('bcrypt');
var ServiceHelper  = require("./service_helper");

var db             = new AccountMapper();
var serviceHelper  = new ServiceHelper();

function Authenticate() {
    'use strict';
    return;
}

Authenticate.prototype.login = function (req, res, next) {
    'use strict';
    var account = req.params;

    if (account.name === undefined || account.password === undefined) {
        return next(new restify.InvalidArgumentError('Name must be supplied'));
    }

    db.getPasswordByName(account.name, function (result) {
        bcrypt.compare(account.password, _.first(result).password, function(err, success) {
            if (success) {
                res.send({status: "success"});
            } else {
                res.send({status: "fail"});
            }
            next();
        });
    });
};

Authenticate.prototype.create = function (req, res, next) {
    'use strict';

    var account = req.params;
    if (serviceHelper.verifyAccountInput(account)) {
        return next(new restify.InvalidArgumentError('Name must be supplied'));
    }

    serviceHelper.encryptPassword(account.password, function (err, password) {
        if (err) {
            throw new Error(err);
        }
        account.password = password;
        db.createAccount(account, function (result) {
            if (result.status === "success") {
                res.send({status: "success"});
            } else {
                result = _.extend(result, {status: "fail"});
                res.send(result);
            }
            next();
        });
    });
};


module.exports = Authenticate;