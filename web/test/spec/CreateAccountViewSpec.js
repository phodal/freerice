define([
	'jquery',
	'js/CreateAccountView',
	'jasmine-jquery'
], function($, CreateAccountView) {
	var view;

	beforeEach(function() {
		view = new CreateAccountView();
	});

	describe("when view is constructing", function() {
		it("should return user name", function() {
			expect(view).toBeDefined();
		});
	});
	describe("should have value", function() {
		it('should return the value of #content', function () {
			expect(view.$el.find('#content')).toHaveValue();
		});
	});
});
