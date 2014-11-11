var sqlite3         = require('sqlite3').verbose();
var _               = require('underscore');
var DBHelper        = require('./db_helper');
var db_helper       = new DBHelper();
var DBPrototype     = require('./db_prototype');

function AccountMapper() {
    'use strict';
    return;
}

AccountMapper.prototype = new DBPrototype();

AccountMapper.prototype.getAccountById = function (user_id, callback) {
    'use strict';
    var sql = "SELECT id,name,email FROM user WHERE id = " + user_id;
    AccountMapper.prototype.basic(sql, callback);
};

AccountMapper.prototype.getPasswordByName = function (user_name, callback) {
    'use strict';
    var sql = "SELECT * FROM user WHERE name = '" + user_name + "' LIMIT 1";
    AccountMapper.prototype.basic(sql, callback);
};

AccountMapper.prototype.getAccountByName = function (user_name, callback) {
    'use strict';
    var sql = "SELECT id,name,email FROM user WHERE name = '" + user_name + "' LIMIT 1";
    AccountMapper.prototype.basic(sql, callback);
};

AccountMapper.prototype.findAllAccount = function (callback) {
    'use strict';
    var sql = "SELECT id,name,email FROM user";
    AccountMapper.prototype.basic(sql, callback);
};

AccountMapper.prototype.createAccount = function (account, callback) {
    'use strict';

    function createNewAccount() {
        var sql = "INSERT OR REPLACE INTO  USER (" + db_helper.getKey(account) + ") VALUES (" + db_helper.getValue(account) + ");";

        var db = new sqlite3.Database("dev.db");
        db.all(sql, function (err, rows) {
            AccountMapper.prototype.errorHandler(err);
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

    AccountMapper.prototype.getAccountByName(account.name, function(result){
        if(!_.isEmpty(result)){
            return callback({
                "error": "user exist"
            });
        }
        createNewAccount();
    });
};

module.exports = AccountMapper;