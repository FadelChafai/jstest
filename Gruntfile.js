/*global module:false*/
module.exports = function (grunt) {

    grunt.initConfig({
            jshint: {
                all: ['Gruntfile.js', 'lib/*.js', 'test/*.js'],
                options: {
                    reporter: require('jshint-stylish'),
                    reporterOutput: 'jshint.html'
                },
            },
            simplemocha: {
                options: {
                    globals: ['expect'],
                    timeout: 3000,
                    ignoreLeaks: false,
                    ui: 'bdd',
                    reporter: 'tap'
                },
                all: {
                    src: ['test/*Test.js']
                }
            },
            karma: {
                unit: {
                    configFile: 'karma.conf.js',
                    port: 9999,
                    singleRun: true,
                    browsers: ['PhantomJS'],
                    logLevel: 'ERROR',
                    frameworks: ['mocha', 'browserify', 'jquery-2.1.0', 'sinon', 'chai'],
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
            },
            // Before generating any new files, remove any previously-created files.
            clean: {
                tests: ['tmp'],
            },
            // Configuration to be run (and then tested).
            plato: {
                default_options: {
                    files: {
                        'tmp/default_options': ['lib/**/*.js', 'test/**/*.js'],
                    },
                }
            }

        }
    );

    grunt.loadNpmTasks('grunt-simple-mocha');
    grunt.loadNpmTasks('grunt-karma');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-plato');
    grunt.loadNpmTasks('grunt-contrib-clean');

    grunt.registerTask('default', ['jshint', 'simplemocha', 'karma']);
    grunt.registerTask('jenkins', ['jshint', 'simplemocha', 'karma', 'concat', 'clean', 'plato']);
}
;
