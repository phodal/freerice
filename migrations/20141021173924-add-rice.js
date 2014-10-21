var dbm = require('db-migrate');
var type = dbm.dataType;

exports.up = function(db, callback) {
    db.createTable('rice', {
        id: { type: 'int', primaryKey: true },
        name: type.STRING,
        type: type.STRING,
        price: type.DECIMAL,
        quantity: type.DECIMAL,
        description: type.STRING
    }, callback);
};

exports.down = function(db, callback) {
    db.dropTable('rice', callback);
};
