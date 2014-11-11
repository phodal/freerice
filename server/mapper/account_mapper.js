var sqlite3         = require('sqlite3').verbose();
var _               = require('underscore');
var DBHelper       = require('./db_helper');
var db_helper = new DBHelper();

function AccountDB() {
    'use strict';
    return;
}

AccountDB.prototype.errorHandler = function (err) {
    'use strict';
    if (err !== null) {
        throw err;
    }
};

AccountDB.prototype.basic = function(sql, db_callback){
    'use strict';
    var db = new sqlite3.Database("dev.db");
    db.all(sql, function (err, rows) {
        AccountDB.prototype.errorHandler(err);
        db.close();
        db_callback(rows);
    });
};

AccountDB.prototype.getAccountById = function (user_id, callback) {
    'use strict';
    var sql = "SELECT id,name,email FROM user WHERE id = " + user_id;
    AccountDB.prototype.basic(sql, callback);
};

AccountDB.prototype.getPasswordByName = function (user_name, callback) {
    'use strict';
    var sql = "SELECT * FROM user WHERE name = '" + user_name + "' LIMIT 1";
    AccountDB.prototype.basic(sql, callback);
};

AccountDB.prototype.getAccountByName = function (user_name, callback) {
    'use strict';
    var sql = "SELECT id,name,email FROM user WHERE name = '" + user_name + "' LIMIT 1";
    AccountDB.prototype.basic(sql, callback);
};

AccountDB.prototype.findAllAccount = function (callback) {
    'use strict';
    var sql = "SELECT id,name,email FROM user";
    AccountDB.prototype.basic(sql, callback);
};

AccountDB.prototype.findAllRice = function (callback) {
    'use strict';
    var sql = "SELECT * FROM rice";
    AccountDB.prototype.basic(sql, callback);
};

AccountDB.prototype.createAccount = function (account, callback) {
    'use strict';

    function createNewAccount() {
        var sql = "INSERT OR REPLACE INTO  USER (" + db_helper.getKey(account) + ") VALUES (" + db_helper.getValue(account) + ");";

        var db = new sqlite3.Database("dev.db");
        db.all(sql, function (err, rows) {
            AccountDB.prototype.errorHandler(err);
            db.close();
            if (_.isEmpty(rows)) {
                rows = {
                    "status": "success"
                };
            } else {
                rows = {};
            }
            callback(rows);
        });
    }

    AccountDB.prototype.getAccountByName(account.name, function(result){
        if(!_.isEmpty(result)){
            return callback({
                "error": "user exist"
            });
        }
        createNewAccount();
    });
};

AccountDB.prototype.createRice = function (rice, callback) {
    'use strict';

    var sql = "INSERT OR REPLACE INTO  RICE (" + db_helper.getKey(rice) + ") VALUES (" + db_helper.getValue(rice) + ");";

    var db = new sqlite3.Database("dev.db");
    db.all(sql, function (err, rows) {
        AccountDB.prototype.errorHandler(err);
        db.close();
        if(_.isEmpty(rows)){
            rows = {
                "status": "success"
            };
        }
        callback(rows);
    });
};

module.exports = AccountDB;