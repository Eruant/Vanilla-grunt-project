/*jslint nomen:true */
/*global Parent, define, window */

define('Child', ['Parent'], function (Parent) {
	'use strict';
	
	return Parent.extend({
		name: 'Child Class',
		init: function (id, options) {
			this._super(id, options);
			window.console.log('Child: ' + this.name, this);
		},
		childFunction: function () {
			window.console.log('childFunction', this);
		}
	});
});