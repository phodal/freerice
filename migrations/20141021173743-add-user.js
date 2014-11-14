var dbm = require('db-migrate');
var type = dbm.dataType;

exports.up = function(db, callback) {
    db.createTable('user', {
        id: { type: 'int', primaryKey: true },
        name: type.STRING,
        password: type.STRING,
        email: type.STRING,
        role: type.STRING,
        enabled: type.BOOLEAN
    }, callback);
};

exports.down = function(db, callback) {
    db.dropTable('user', callback);
};
