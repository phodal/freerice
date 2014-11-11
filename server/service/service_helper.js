var bcrypt         = require('bcrypt');

function ServiceHelper() {
    'use strict';
    return;
}

ServiceHelper.prototype.verifyRiceInput = function (rice) {
    return rice.name === undefined || rice.type === undefined || rice.price === undefined || rice.quantity === undefined ||rice.description === undefined;
};

ServiceHelper.prototype.verifyAccountInput = function (account) {
    return account.name === undefined || account.password === undefined || account.email === undefined;
};

ServiceHelper.prototype.encryptPassword = function encryptPassword(password, cb) {
    'use strict';
    bcrypt.genSalt(10, function (err, salt) {
        bcrypt.hash(password, salt, function(err, hash) {
            cb(null, hash);
        });
    });
};

module.exports = ServiceHelper;