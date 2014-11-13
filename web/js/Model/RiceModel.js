"use strict";

define(['backbone', "config"], function(Backbone, config) {
    var RiceModel = Backbone.Model.extend({});
    var Rices = Backbone.Collection.extend({
        model: RiceModel,
        url: config.localhost + '/all/rice',
        parse: function (data) {
            return data;
        }
    });
    return Rices;
});