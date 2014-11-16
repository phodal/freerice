define([
    'jquery',
    'underscore',
    'mustache',
    'js/lib/UserSession',
    '../Model/CreateRiceModel'
],function($, _, Mustache, UserSession, CreateRice){
    'use strict';
    function Rice(){

    }
    Rice.prototype.create = function(riceObject) {
        var createRice = new CreateRice({
            name: riceObject.name,
            type: riceObject.type,
            price: riceObject.price,
            quantity: riceObject.quantity,
            description: riceObject.description
        });

        createRice.save({}, {
            success: function(model, response) {
                if(response.status === "success"){
                    console.log("createRice success");
                } else {

                }
            },
            error: function(model, response) {
            }
        });
    };

    return Rice;
});