var dbm = require('db-migrate');
var type = dbm.dataType;

exports.up = function(db, callback) {
    db.insert('user',
        ['name', 'password', 'email', 'role','enabled'],
        ["admin","admin", "admin@phodal.com", 'user', 1],
        callback)
};

exports.down = function(db, callback) {

};
