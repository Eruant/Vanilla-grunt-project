/*jslint nomen:true */
/*global define, FB, window */
/**
 * @class Facebook
 * Facebook authorization
 * @extends Class
 */

define('Facebook', ['Class'], function (Class) {
	'use strict';
	
	return Class.extend({
		
		/**
		 * Initializing function
		 * Asynchronously loads the facebook SDK
		 */
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
		
		/**
		 * Looks for changes in the status of the user
		 */
		subscribe: function () {
			
			var me = this;
			
			FB.Event.subscribe('auth.authResponseChange', function (response) {
				me.loginResponse(response);
			});
		},
		
		/**
		 * Gets the login status of the user
		 */
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
		
		/**
		 * tries to log a use in
		 */
		login: function () {
			
			var me = this;
			
			FB.login(function (response) {
				me.loginResponse(response);
			});
		},
		
		/**
		 * Deals with the login response from Facebook
		 */
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
		
		/**
		 * Called after a user is successfully authenticated
		 */
		ready: function () {
			this.subscribe();
			window.console.log('Ready');
		},
		
		/**
		 * Called if an error occurs
		 */
		error: function (msg) {
			window.console.log('Error: ' + msg);
		},
		
		/**
		 * Makes a request to facebook
		 */
		request: function (url, callback) {
			FB.api(url, callback);
		}
		
	});
});