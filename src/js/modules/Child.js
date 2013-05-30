/*jslint nomen:true */
/*global Parent, define, window */

define('Child', ['Parent'], function (Parent) {
	'use strict';
	
	return Parent.extend({
		name: 'Child Class',
		init: function () {
			this._super();
			window.console.log(this.name, this);
		}
	});
});