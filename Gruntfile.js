/*globals module*/

module.exports = function (grunt) {
	'use strict';
	
	/*
	 * Configure the projects
	 */
	grunt.initConfig({
		watch: {
		}
	});
	
	/*
	 * Load the plugins
	 */
	grunt.loadNpmTasks('grunt-contrib-watch');
	
	/*
	 * Set the tasks
	 */
	grunt.registerTask('default', ['watch']);

};