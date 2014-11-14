var AccountMapper  =require("../../server/mapper/account_mapper");
var sqlite         = new AccountMapper();

var RiceMapper  =require("../../server/mapper/rice_mapper");
var riceDB         = new RiceMapper();


describe('DB Mapper Throw Error Test', function() {
    it('should throw error on errorHandler', function () {
        expect(sqlite.errorHandler()).to.throw();
    });
});

describe("Mapper Test", function () {
    describe('Create Account', function() {
        var account = { name: "user", password: "user", email: "newuser@phodal.com" };

        it('should return user exist when create account again', function(done) {
            sqlite.createAccount(account , function(){
                sqlite.createAccount(account , function(result){
                    if(result.error === "user exist"){
                        done();
                    }
                });
            });
        });
    });

    describe('Create Rice', function() {
        it('should return the create rice', function(done) {
            var rice = { name: "zero", type: "user", quantity: 23, price:23, description: "newuser@phodal.com" };

            riceDB.createRice(rice , function(result){});
            riceDB.findAllRice(function(result){
                if(result[0].description = "newuser@phodal.com"){
                    done();
                }
            });
        });
    });

});