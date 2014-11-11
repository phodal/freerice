var AccountMapper  =require("../server/mapper/account_mapper");
var sqlite         = new AccountMapper();

var RiceMapper  =require("../server/mapper/rice_mapper");
var riceDB         = new RiceMapper();


describe('Throw  Error Test', function() {
    it('should throw error on errorHandler', function () {
        expect(sqlite.errorHandler()).to.throw();
    });
});

describe('Create Account Test', function() {
    it('should return user exist when create account again', function(done) {
        var account = { name: "zero", password: "user", email: "newuser@phodal.com" };
        sqlite.createAccount(account , function(result){
            done();
        });
        sqlite.createAccount(account , function(result){
            if(result.error === "user exist"){
                done();
            }
        });
    });
});

describe('Create Rice Test', function() {
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
