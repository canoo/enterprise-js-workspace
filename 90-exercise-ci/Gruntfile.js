module.exports = function (grunt) {

    var buildDir = 'build/dist/';
    var reportsDir = 'build/reports/';
    var cssDir = buildDir + 'resources/css/';

    // Project configuration.
    grunt.initConfig({
            pkg: grunt.file.readJSON('package.json'),


            /**
             * Uglify the config.js and require.js source files which are not uglified by r.js
             */
            uglify: {
                options: {
                    compress: true
                },
                build  : {
                    files: [
                        { src: ['src/config.js'], dest: buildDir + 'config.js' },
                        { src: ['src/scripts/requirejs/require.js'], dest: buildDir + 'scripts/requirejs/require.js' }
                    ]
                }
            },

            requirejs: {
                compile: {
                    options: {
                        /**
                         * the entry point where requirejs will start to identify the dependencies of the application
                         */
                        name: 'app',

                        /**
                         * config.js which is used inside index.html
                         */
                        mainConfigFile: "src/config.js",
                        optimize      : "uglify",
                        out           : buildDir + "app.js"
                    }
                }
            },

            cssmin: {
                compress: {
                    files: [
                        { src: [ 'src/resources/css/*' ], dest: cssDir + 'main.css' }
                    ]
                }
            },

            clean: {
                build: [ 'build/' ]
            },

            copy: {
                build: {
                    files: [
                        {
                            expand: true,
                            cwd   : 'src/',
                            src   : [
//                                'config.js',
//                                'scripts/requirejs/require.js',

                                'index.html',
                                'app/templates/**/*.html'
                            ],
                            dest  : buildDir
                        },
                    ]
                }
            },

            watch: {

                buster: {
                    files: [ 'src/app/**/*.js', 'test/**/*-test.js'],
                    tasks: ['buster:dev']
                }
            },

            buster: {
                teamcity: {
                    test  : {
                        config        : 'test/buster.js',
                        reporter      : 'teamcity',
                        'config-group': 'CI' // change when coverage is needed
                    },
                    server: {
                        port: 1111
                    }
                },

                dev: {
                    test: {
                        config        : 'test/buster.js',
                        reporter      : 'specification',
                        'log-level'   : 'debug',
                        'config-group': 'Browser'
                    },

                    server: {
                        port: 1111
                    }
                }
            }
        }
    );

    grunt.loadNpmTasks('grunt-contrib');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-requirejs');

    grunt.loadNpmTasks('grunt-buster');

    // Default task.
    grunt.registerTask('default', 'build'.split(' '));
    grunt.registerTask('build', 'cssmin requirejs uglify copy:build'.split(' '));

    grunt.registerTask('test', 'buster:dev'.split(' '));
};
