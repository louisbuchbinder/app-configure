
/**
 * @exports configure
 * @description configure an app-context with a handler
 * @param {function} handler method should expect the app context
 * @param {array} args optional array of args to call with the handler
 * @returns {object} app-context
 */

module.exports = function configure(handler, args) {
	handler.apply(this, args);
	return this;
};
