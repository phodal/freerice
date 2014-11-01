define([
	'jquery',
	'js/LoginView',
	'jasmine-jquery'
], function($, LoginView) {
	var view, model;

	beforeEach(function() {
		view = new LoginView();
		view.$el.find('#username').val('test').trigger('change');
		view.$el.find('#password').val('password').trigger('change');
	});

	beforeEach(function () {
		view.$el.find('#login').trigger('click');
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
