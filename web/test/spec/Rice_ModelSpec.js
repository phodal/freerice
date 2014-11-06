define([
	'sinon',
	'js/Model/Rice_Model'
], function(sinon, Rices) {
	'use strict';

	beforeEach(function() {
		this.server = sinon.fakeServer.create();
		this.rices = new Rices();
		//this.server.respondWith(
		//	"GET",
		//	"http://localhost:8080/all/rice",
		//	[
		//		200,
		//		{"Content-Type": "application/json"},
		//		'{"response":"json response here"}'
		//	]
		//);
	});

	afterEach(function() {
		this.server.restore();
	});

	describe("Collection Test", function() {
		it("should request the url and fetch", function () {
			this.rices.fetch();
			expect(this.server.requests.length)
				.toEqual(1);
			expect(this.server.requests[0].method)
				.toEqual("GET");
			expect(this.server.requests[0].url)
				.toEqual("http://localhost:8080/all/rice");
		});

		//it("should request the url and fetch", function() {
		//	this.rices.fetch();
		//	this.server.respond();
		//});
	});
});
