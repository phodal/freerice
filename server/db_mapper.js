var sqlite3         = require('sqlite3').verbose();

function DB() {
    'use strict';
    return;
}

DB.prototype.errorHandler = function (err) {
    'use strict';
    if (err !== null) {
        console.log(err);
        throw err;
    }
};

DB.prototype.getById = function (user_id, callback) {
    'use strict';
    var db = new sqlite3.Database("dev.db");
    db.all("SELECT * FROM user WHERE id = " + user_id, function (err, rows) {
        DB.prototype.errorHandler(err);
        db.close();
        callback(rows);
    });
};

DB.prototype.getByName = function (user_name, callback) {
    'use strict';
    var db = new sqlite3.Database("dev.db");
    db.all("SELECT * FROM user WHERE name = '" + user_name + "'LIMIT 1", function (err, rows) {
        DB.prototype.errorHandler(err);
        db.close();
        callback(rows);
    });
};

DB.prototype.findAllAccount = function (callback) {
    'use strict';
    var db = new sqlite3.Database("dev.db");
    db.all("SELECT * FROM user", function (err, rows) {
        DB.prototype.errorHandler(err);
        db.close();
        callback(rows);
    });
};

DB.prototype.findAllRice = function (callback) {
    'use strict';
    var db = new sqlite3.Database("dev.db");
    db.all("SELECT * FROM rice", function (err, rows) {
        DB.prototype.errorHandler(err);
        db.close();
        callback(rows);
    });
};

module.exports = DB;