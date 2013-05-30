/*globals module*/

module.exports = function (grunt) {
	'use strict';
	
	/*
	 * Configure the processes that will be called
	 * You can call a process directly with `$ grunt <process>(:<option>)`
	 * e.g. `$ grunt uglify` or `$ grunt uglify:build_all`
	 */
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		jshint: {
			options: {
				strict: true,
				white: true
			},
			all: [
				'<%= pkg.src.js %>/*.js'
			]
		},
		uglify: {
			options: {
				banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n',
				mangle: {
					except: ['jQuery']
				},
				sourceMap: '../<%= pkg.dest.js %>/source-map.js'
			},
			build_lib: {
				src: '<%= pkg.src.js %>/lib/*.js',
				dest: '<%= pkg.dest.js %>/<%= pkg.name %>.lib.min.js'
			},
			build_mod: {
				src: '<%= pkg.src.js %>/modules/*.js',
				dest: '<%= pkg.dest.js %>/<%= pkg.name %>.modules.min.js'
			},
			build_all: {
				src: [
					'<%= pkg.src.js %>/lib/*.js',
					'<%= pkg.src.js %>/modules/*.js',
					'<%= pkg.src.js %>/main.js'
				],
				dest: '<%= pkg.dest.js %>/<%= pkg.name %>.all.min.js'
			},
			beautify_all: {
				options: {
					beautify: true
				},
				src: [
					'<%= pkg.src.js %>/lib/*.js',
					'<%= pkg.src.js %>/modules/*.js',
					'<%= pkg.src.js %>/main.js'
				],
				dest: '<%= pkg.dest.js %>/<%= pkg.name %>.all.js'
			}
		},
		cssmin: {
			build: {
				files: {
					'<%= pkg.dest.css %>/<%= pkg.name %>.min.css': [
						'<%= pkg.src.css %>/*.css'
					]
				}
			}
		},
		sass: {
			build: {
				files: {
					'<%= pkg.dest.css %>/<%= pkg.name %>.min.css': [
						'<%= pkg.src.css %>/*.css',
						'<%= pkg.src.css %>/*.scss'
					]
				}
			}
		},
		htmlmin: {
			build_html: {
				options: {
					removeComments: true,
					collapseWhitespace: true
				},
				files: {
					'<%= pkg.dest.html %>/index.html': '<%= pkg.src.html %>/index.html'
				}
				
			}
		},
		smushit: {
			reduce_img: {
				src: [
					'<%= pkg.src.assets %>/img/*.png',
					'<%= pkg.src.assets %>/img/*.jpg'
				],
				dest: '<%= pkg.dest.assets %>/img'
			}
		},
		watch: {
			scripts: {
				files: '<%= pkg.src.js %>/**/*.js',
				tasks: ['uglify', 'jshint', 'uglify']
			},
			styles: {
				files: [
					'<%= pkg.src.css %>/**/*.css',
					'<%= pkg.src.css %>/**/*.scss'
				],
				tasks: ['sass']
			},
			html: {
				files: '<%= pkg.src.html %>/*.html',
				tasks: ['htmlmin']
			},
			assets: {
				files: '<%= pkg.src.assets %>/*',
				tasks: ['smushit']
			}
		}
	});
	
	/*
	 * Load the plugins that we use in the initConfig file
	 */
	grunt.loadNpmTasks('grunt-contrib-watch');		// listens for changes and triggers tasks
	grunt.loadNpmTasks('grunt-contrib-jshint');		// looks for errors in JavaScript
	grunt.loadNpmTasks('grunt-contrib-uglify');		// combines and minifies JavaScript files
	grunt.loadNpmTasks('grunt-contrib-cssmin');		// combines and minifies css files
	grunt.loadNpmTasks('grunt-contrib-sass');		// combines and minifies sass + scss files
	grunt.loadNpmTasks('grunt-contrib-htmlmin');	// minifies html files
	grunt.loadNpmTasks('grunt-smushit');			// lossless compression of images
	
	/*
	 * Set the the tasks that will be run from the command line (default will be called automatically)
	 */
	grunt.registerTask('default', ['watch']);											// $ grunt
	grunt.registerTask('all', ['jshint', 'uglify', 'sass', 'htmlmin', 'smushit']);		// $ grunt all
	grunt.registerTask('noSASS', ['jshint', 'uglify', 'cssmin', 'htmlmin', 'smushit']);	// $ grunt noSASS

};