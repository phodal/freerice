var DB              = require("./db_mapper");
var sqlite        = new DB();

function DBService() {
    'use strict';
    return;
}

DBService.prototype.getById = function (req, res, next) {
    'use strict';
    var userId = req.params.id;
    sqlite.getById(userId, function (result) {
        res.send(result);
        next();
    });
};

DBService.prototype.getByName = function (req, res, next) {
    'use strict';
    var userName = req.params.name;
    sqlite.getByName(userName, function (result) {
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