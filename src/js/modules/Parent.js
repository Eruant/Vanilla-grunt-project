/*global Class, define, window */

define('Parent', function () {
	'use strict';
	
	return Class.extend({
		name: 'Parent Class',
		init: function () {
			window.console.log(this.name, this);
		}
	});
});