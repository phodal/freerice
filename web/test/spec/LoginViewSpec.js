define([
	'jquery',
	'js/LoginView',
	'sinon',
	'jasmine-jquery'
], function($, LoginView, sinon) {
	var view, model;

	beforeEach(function() {
		view = new LoginView();
		view.$el.find('#username').val('admin').trigger('change');
		view.$el.find('#password').val('admin').trigger('change');
	});

	describe("when view is constructing", function() {
		it("should return user name", function() {
			expect(view).toBeDefined();
			view.$el.find('#login').trigger('click');
		});
	});
	describe("should have value", function() {
		it('should return the value of #content', function () {
			expect(view.$el.find('#content')).toHaveValue();
		});
	});
});
