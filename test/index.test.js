
var assert = require('assert');
var configure = require('..');

describe('App Configure Unit Tests', function () {
	var app;

	beforeEach(function () {
		app = {
			configure: configure
		};
	});

	it('should be a function', function () {
		assert.equal(typeof configure, 'function');
	});

	it('should apply a handler to a context', function () {
		var handler = function () {
			this.apples = true;
		};

		assert.equal(app.apples, undefined);
		app.configure(handler);
		assert.equal(app.apples, true);
	});

	it('should return the app context', function () {
		var noop = function () {};

		assert.equal(app.configure(noop), app);
	});

	it('should use the arguments on the handler', function () {
		var setApple = function (trees, juice, computers) {
			this.apples = {
				trees: trees,
				juice: juice,
				computers: computers
			};
		};

		app.configure(setApple, [true, false, true]);
		assert.equal(app.apples.trees, true);
		assert.equal(app.apples.juice, false);
		assert.equal(app.apples.computers, true);
	});
});
