define([
	'js/Model/CreateAccountModel'
], function(CreateAccount) {
	'use strict';

	beforeEach(function() {
		this.user = new CreateAccount({
			name: "phodal",
			password: "password"
		});
	});

	describe("User Login", function() {
		it("should return user name", function() {
			expect(this.user.get('name')).toEqual("phodal");
		});
		it("should return user password", function() {
			expect(this.user.get('password')).toEqual("password");
		});
	});
});
