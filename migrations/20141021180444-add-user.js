var dbm = require('db-migrate');
var type = dbm.dataType;

exports.up = function(db, callback) {
    db.insert('user',
        ['name', 'password', 'email', 'enabled'],
        ["admin","admin", "admin@phodal.com",1],
        callback)
};

exports.down = function(db, callback) {

};
