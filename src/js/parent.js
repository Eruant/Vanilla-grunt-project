/*global Class, define, window */

define('Parent', function () {
	'use strict';
	
	return Class.extend({
		init: function () {
			window.console.log('Parent.init', this);
		}
	});
});