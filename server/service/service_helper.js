var bcrypt         = require('bcrypt');
var _              = require('underscore');

function ServiceHelper() {
    'use strict';
    return;
}

ServiceHelper.prototype.verifyRiceInput = function (rice) {
    'use strict';
    return rice.name === undefined || rice.type === undefined || rice.price === undefined || rice.quantity === undefined ||rice.description === undefined;
};

ServiceHelper.prototype.verifyAccountInput = function (account) {
    'use strict';
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