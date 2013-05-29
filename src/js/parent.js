/*global Class, define, window */

define(function () {
	'use strict';
	
	return Class.extend({
		init: function () {
			window.console.log('Parent.init', this);
		}
	});
});