var DB              = require("./db_mapper");
var sqlite        = new DB();

function Response() {
    'use strict';
    return;
}

Response.prototype.getById = function (req, res, next) {
    'use strict';
    sqlite.getById(req.params.id, function (result) {
        res.send(result);
        next();
    });
};

Response.prototype.getByName = function (req, res, next) {
    'use strict';
    sqlite.getByName(req.params.name, function (result) {
        res.send(result);
        next();
    });
};

Response.prototype.findAllAccount = function (req, res, next) {
    'use strict';
    sqlite.findAllAccount(function (result) {
        res.send(result);
        next();
    });
};

Response.prototype.findAllRice = function (req, res, next) {
    'use strict';
    sqlite.findAllRice(function (result) {
        res.send(result);
        next();
    });
};


module.exports = Response;