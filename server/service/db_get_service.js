var AccountMapper = require("./../mapper/account_mapper");
var db        = new AccountMapper();

function DBService() {
    'use strict';
    return;
}

DBService.prototype.getAccountById = function (req, res, next) {
    'use strict';
    var userId = req.params.id;
    db.getAccountById(userId, function (result) {
        res.send(result);
        next();
    });
};

DBService.prototype.getAccountByName = function (req, res, next) {
    'use strict';
    var userName = req.params.name;
    db.getAccountByName(userName, function (result) {
        res.send(result);
        next();
    });
};

DBService.prototype.findAllAccount = function (req, res, next) {
    'use strict';
    db.findAllAccount(function (result) {
        res.send(result);
        next();
    });
};

module.exports = DBService;