//define([
//	'jquery',
//	'sinon',
//	'js/Model/Rice_Model'
//], function($, sinon, Rices) {
//	'use strict';
//
//	beforeEach(function() {
//		this.rice_stub = sinon.stub(window, "Rices");
//		this.model = new Backbone.Model({});
//		this.rice_stub.returns(this.model);
//		this.rices = new Rices();
//		this.rices.model = Rices;
//		this.rices.add({});
//	});
//
//	afterEach(function() {
//		this.rice_stub.restore();
//	});
//
//	it("should add a model", function() {
//		expect(this.rices.length).toEqual(1);
//	});
//});
