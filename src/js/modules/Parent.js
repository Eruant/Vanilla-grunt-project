/*global Class, define, window */

define('Parent', ['Class'], function (Class) {
	'use strict';
	
	return Class.extend({
		name: 'Parent Class',
		init: function (id, options) {
			this.id = id;
			this.options = options;
			window.console.log('Parent: ' + this.name, this);
		},
		parentFunction: function () {
			window.console.log('parent', this);
		}
	});
});