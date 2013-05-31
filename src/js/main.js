/*globals require, window*/

(function () {
	'use strict';
	
	require(['Child', 'Facebook'], function (Child, Facebook) {
		
		var facebook = new Facebook('js-root', {
				appId: '296561463809004',
				status: true
			}),
			child = new Child('test1',  {
				options1: 'child options param'
			});
		
		child.childFunction();
		child.parentFunction();

	});
}());