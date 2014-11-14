define([
	'sinon',
	'js/Model/RiceModel'
], function(sinon, Rices) {
	'use strict';
	var data = {"id":1,"name":"Rice","type":"Good","price":12,"quantity":1,"description":"Made in China"};

	beforeEach(function() {
		this.server = sinon.fakeServer.create();
		this.rices = new Rices();
		this.server.respondWith(
			"GET",
			"http://0.0.0.0:8080/all/rice",
			[
				200,
				{"Content-Type": "application/json"},
				JSON.stringify(data)
			]
		);
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
				.toEqual("http://0.0.0.0:8080/all/rice");
		});

		it("should get data from the url", function() {
			this.rices.fetch();
			this.server.respond();
			var result = JSON.parse(JSON.stringify(this.rices.models[0]));
			expect(result["id"])
				.toEqual(1);
			expect(result["price"])
				.toEqual(12);
			expect(result)
				.toEqual(data);
		});
	});
});
