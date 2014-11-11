var sqlite3         = require('sqlite3').verbose();
var _               = require('underscore');

function DBPrototype() {
    'use strict';
    return;
}

DBPrototype.prototype.errorHandler = function (err) {
    'use strict';
    if (err !== null) {
        throw err;
    }
};

DBPrototype.prototype.basic = function(sql, db_callback){
    'use strict';
    var db = new sqlite3.Database("dev.db");
    db.all(sql, function (err, rows) {
        DBPrototype.prototype.errorHandler(err);
        db.close();
        db_callback(rows);
    });
};

module.exports = DBPrototype;