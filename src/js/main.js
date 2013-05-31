/*globals require, window*/

(function () {
	'use strict';

    require(['Child'], function (Child) {
		var a = new Child('test1',  { options1: 'child options param'});
		a.childFunction();
		a.parentFunction();
	});
	
	require(['Facebook'], function (Facebook) {
		
		var facebook = new Facebook('js-root', {
			appId: '296561463809004',
			status: true
		});

	});
}());
