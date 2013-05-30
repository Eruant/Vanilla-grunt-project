/*globals require, window*/

(function () {
	'use strict';

    require(['Child'], function (Child) {
		var a = new Child('test1',  { options1: 'child options param'});
		a.childFunction();
		a.parentFunction();
	});
}());
