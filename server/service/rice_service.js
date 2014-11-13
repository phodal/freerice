var RiceMapper      = require("./../mapper/rice_mapper");
var db              = new RiceMapper();
var _               = require("underscore");
var restify         = require("restify");
var ServiceHelper   = require("./service_helper");
var serviceHelper   = new ServiceHelper();

function Rice() {
    'use strict';
    return;
}

Rice.prototype.findAllRice = function (req, res, next) {
    'use strict';
    db.findAllRice(function (result) {
        res.send(result);
        next();
    });
};

Rice.prototype.create = function (req, res, next) {
    'use strict';

    var rice = req.params;

    if (serviceHelper.verifyRiceInput(rice)) {
        return next(new restify.InvalidArgumentError('String must be supplied'));
    }

    db.createRice(rice, function(result) {
        if (result.status === "success") {
            res.send({status: "success"});
            next();
        } else {
            result = _.extend(result, {status: "fail"});
            res.send(result);
            next();
        }
    });
};

module.exports = Rice;