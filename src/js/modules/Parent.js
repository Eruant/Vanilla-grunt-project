/*global Class, define, window */
/**
 * @class Parent
 * This is a Parent function
 * @extends Class
 */

define('Parent', ['Class'], function (Class) {
	'use strict';
	
	return Class.extend({
		/**
		 * @cfg {String} name
		 * The name of the class
		 */
		name: 'Parent Class',
		/**
		 * Initializing function
		 */
		init: function (id, options) {
			this.id = id;
			this.options = options;
			window.console.log('Parent: ' + this.name, this);
		},
		/**
		 * Parent function
		 * Logs itself
		 */
		parentFunction: function () {
			window.console.log('parentFunction', this);
		}
	});
});