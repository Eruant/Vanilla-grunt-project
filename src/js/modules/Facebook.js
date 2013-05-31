/*jslint nomen:true */
/*global define, FB, window */

define('Facebook', ['Class'], function (Class) {
	'use strict';
	
	return Class.extend({
		
		init: function (id, options) {
			
			var me = this;

			window.fbAsyncInit = function () {
				FB.init(options);
				me.getLoginStatus();
			};
			
			(function (d) {
				var js,
					id = 'facebook-jssdk',
					ref = d.getElementsByTagName('script')[0];
				if (d.getElementById(id)) { return; }
				js = d.createElement('script');
				js.id = id;
				js.async = true;
				js.src = '//connect.facebook.net/en_US/all.js';
				ref.parentNode.insertBefore(js, ref);
			}(window.document));
		},
		
		subscribe: function () {
			
			var me = this;
			
			FB.Event.subscribe('auth.authResponseChange', function (response) {
				me.loginResponse(response);
			});
		},
		
		getLoginStatus: function () {
			
			var me = this;
			
			FB.getLoginStatus(function (response) {
				if (response.status === 'connected') {
					// app connected
					me.ready();
				} else if (response.status === 'not_authorized') {
					// app not authorized
					me.login();
				} else {
					// app not logged in
					me.login();
				}
			});
		},
		
		login: function () {
			
			var me = this;
			
			FB.login(function (response) {
				me.loginResponse(response);
			});
		},
		
		loginResponse: function (response) {
			
			var me = this;
			
			if (response.status === 'connected' && response.authResponse) {
				me.ready();
			} else if (response.status === 'not_authorized') {
				me.error('User not authorized');
			} else {
				me.error('User not logged in');
			}
		},
		
		ready: function () {
			this.subscribe();
			window.console.log('Ready');
		},
		
		error: function (msg) {
			window.console.log('Error: ' + msg);
		},
		
		request: function (url, callback) {
			FB.api(url, callback);
		}
		
	});
});