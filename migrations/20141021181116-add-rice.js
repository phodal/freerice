var dbm = require('db-migrate');
var type = dbm.dataType;

exports.up = function(db, callback) {
    db.insert('rice',
        ['name', 'type', 'price', 'quantity', 'description'],
        ["Rice","Good", 12, 1 , "Made in China"],
        callback)
};

exports.down = function(db, callback) {

};
