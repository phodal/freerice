var DB              = require("./db_mapper");
var sqlite        = new DB();

function get_response() {
    'use strict';
    return;
}

get_response.getById = function (req, res, next) {
    'use strict';
    sqlite.getById(req.params.id, function (result) {
        res.send(result);
        next();
    });
};

get_response.getByName = function (req, res, next) {
    'use strict';
    sqlite.getByName(req.params.name, function (result) {
        res.send(result);
        next();
    });
};

get_response.findAllAccount = function (req, res, next) {
    'use strict';
    sqlite.findAllAccount(function (result) {
        res.send(result);
        next();
    });
};

get_response.findAllRice = function (req, res, next) {
    'use strict';
    sqlite.findAllRice(function (result) {
        res.send(result);
        next();
    });
};


module.exports = get_response;