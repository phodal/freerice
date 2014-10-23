var DB           =require("../server/db_mapper");
var sqlite       = new DB();

describe('Throw  Error Test', function() {
    it('should throw error on errorHandler', function() {
        expect(sqlite.errorHandler()).to.throw();
    });
});