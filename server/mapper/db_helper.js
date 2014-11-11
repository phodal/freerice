var _               = require('underscore');

function db_helper() {
    'use strict';
    return;
}

db_helper.prototype.getValue = function (account) {
    'use strict';
    var str = "";
    _.each(account, function (key) {
        str += "'" + key + "',";
    });
    str = str.substring(0, str.length - 1);
    return str;
};

db_helper.prototype.getKey = function (account) {
    'use strict';
    var str = "";
    _.each(account, function (key, value) {
        str += value + ",";
    });
    str = str.substring(0, str.length - 1);
    return str;
};

module.exports = db_helper;