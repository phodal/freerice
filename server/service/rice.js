var RiceMapper   = require("./../mapper/rice_mapper");
var db              = new RiceMapper();
var _               = require("underscore");
var restify         = require("restify");

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
    var verifyInput = rice.name === undefined || rice.type === undefined || rice.price === undefined || rice.quantity === undefined || rice.description === undefined;
    if (verifyInput) {
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