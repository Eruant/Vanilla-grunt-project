/*jslint nomen:true */
/*global Parent, define, window */
/**
 * @class Child
 * This is a child function
 * @extends Parent
 */

define('Child', ['Parent'], function (Parent) {
	'use strict';
	
	return Parent.extend({
		/**
		 *	@cfg {String} name
		 * The name of the class
		 */
		name: 'Child Class',
		/**
		 * Initializing function
		 */
		init: function (id, options) {
			this._super(id, options);
			window.console.log('Child: ' + this.name, this);
		},
		/**
		 * Child function
		 * Logs itself
		 */
		childFunction: function () {
			window.console.log('childFunction', this);
		}
	});
});