var AccountDB              = require("./../mapper/account_mapper");
var sqlite        = new AccountDB();

function DBService() {
    'use strict';
    return;
}

DBService.prototype.getAccountById = function (req, res, next) {
    'use strict';
    var userId = req.params.id;
    sqlite.getAccountById(userId, function (result) {
        res.send(result);
        next();
    });
};

DBService.prototype.getAccountByName = function (req, res, next) {
    'use strict';
    var userName = req.params.name;
    sqlite.getAccountByName(userName, function (result) {
        res.send(result);
        next();
    });
};

DBService.prototype.findAllAccount = function (req, res, next) {
    'use strict';
    sqlite.findAllAccount(function (result) {
        res.send(result);
        next();
    });
};

DBService.prototype.findAllRice = function (req, res, next) {
    'use strict';
    sqlite.findAllRice(function (result) {
        res.send(result);
        next();
    });
};


module.exports = DBService;