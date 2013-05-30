/*globals module*/

module.exports = function (grunt) {
	'use strict';
	
	/*
	 * Configure the projects
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
				files: '<%= pkg.src.css %>/**/*.css',
				tasks: ['cssmin']
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
	 * Load the plugins
	 */
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-htmlmin');
	grunt.loadNpmTasks('grunt-smushit');
	
	/*
	 * Set the tasks
	 */
	grunt.registerTask('default', ['watch']);											// $ grunt
	grunt.registerTask('all', ['jshint', 'uglify', 'cssmin', 'htmlmin', 'smushit']);	// $ grunt all

};