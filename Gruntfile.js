/*global module:false*/
module.exports = function(grunt) {

	grunt.initConfig({
		jshint: {
			all: ['Gruntfile.js', 'lib/*.js', 'test/*.js']
		},
		simplemocha : {
			options : {
				globals : [ 'expect' ],
				timeout : 3000,
				ignoreLeaks : false,
				ui : 'bdd',
				reporter : 'tap'
			},
			all : {
				src : [ 'test/*Test.js' ]
			}
		},
		karma: {
			  unit: {
			    configFile: 'karma.conf.js',
			    port: 9999,
			    singleRun: true,
			    browsers: ['PhantomJS'],
			    logLevel: 'ERROR',
			    frameworks: ['mocha','browserify','jquery-2.1.0','sinon','chai'],
			  }
		},
		concat: {
			options: {
				separator: ';',
			},
			dist: {
				src: ['lib/*.js'],
				dest: 'dist/built.js',
			},
		}
	});
	
	grunt.loadNpmTasks('grunt-simple-mocha');
	grunt.loadNpmTasks('grunt-karma');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-concat');
	// Default task.
	grunt.registerTask('default', [ 'simplemocha', 'karma', 'jshint','concat' ]);

};
