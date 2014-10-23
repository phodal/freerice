var dbm = require('db-migrate');
var type = dbm.dataType;

exports.up = function(db, callback) {
  var updateAdminSql = 'UPDATE USER SET PASSWORD = ? WHERE NAME = "admin"';

  db.runSql(updateAdminSql, ['$2a$10$Vq/cxG7Nxai6SN5U4k.tQOrVySVf840wcmwFkbhXd5u9DQj5fwUiO'], callback);
};

exports.down = function(db, callback) {

};
