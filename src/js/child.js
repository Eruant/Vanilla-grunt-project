/*jslint nomen:true */
/*global Parent, define */

define('Child', ['Parent'], function (Parent) {
	'use strict';
	
	return Parent.extend({
		init: function () {
			this._super();
		}
	});
});