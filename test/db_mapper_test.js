var DB           =require("../server/db_mapper");
var sqlite       = new DB();

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