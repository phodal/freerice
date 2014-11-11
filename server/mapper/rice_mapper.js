var sqlite3         = require('sqlite3').verbose();
var _               = require('underscore');
var DBHelper        = require('./db_helper');
var db_helper       = new DBHelper();
var DBPrototype     = require('./db_prototype');

function RiceMapper() {
    'use strict';
    return;
}

RiceMapper.prototype = new DBPrototype();

RiceMapper.prototype.findAllRice = function (callback) {
    'use strict';
    var sql = "SELECT * FROM rice";
    RiceMapper.prototype.basic(sql, callback);
};

RiceMapper.prototype.createRice = function (rice, callback) {
    'use strict';

    var sql = "INSERT OR REPLACE INTO  RICE (" + db_helper.getKey(rice) + ") VALUES (" + db_helper.getValue(rice) + ");";

    var db = new sqlite3.Database("dev.db");
    db.all(sql, function (err, rows) {
        RiceMapper.prototype.errorHandler(err);
        db.close();
        if(_.isEmpty(rows)){
            rows = {
                "status": "success"
            };
        }
        callback(rows);
    });
};

module.exports = RiceMapper;