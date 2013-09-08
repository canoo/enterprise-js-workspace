module.exports = function (grunt) {

//    var buildDir = 'build/';
    var buildDir = 'mobile/www/';
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
                build: [ buildDir ]
            },

            copy: {
                build: {
                    files: [
                        {
                            expand: true,
                            cwd   : 'src/',
                            src   : [
                                '**/*.html'
                            ],
                            dest  : buildDir
                        }
                    ]
                }
            }
        }
    );

    grunt.loadNpmTasks('grunt-contrib');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-requirejs');

    // Default task.
    grunt.registerTask('default', 'build'.split(' '));
    grunt.registerTask('build', 'cssmin requirejs uglify copy:build'.split(' '));
};
