/**
 * Typical Gruntfile.js script
 *
 * Define a public function with the grunt parameter
 * this method will be invoked by the grunt task runner
 *
 * For basic task configuration see: http://gruntjs.com/configuring-tasks
 *
 */
module.exports = function (grunt) {

    /**
     * you can setup variables used by the build script
     */
    var buildDir = 'build/dist/';
    var debugDir = 'build/debug/';
    var cssDir = buildDir + 'resources/css/';

    // Project configuration
    grunt.initConfig({

            /**
             * Read contents of the package.json file
             */
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

            /**
             * This task uses r.js the requirejs optimizer cli tool to build requirejs projects
             *
             * Task Docs: https://npmjs.org/package/grunt-contrib-requirejs
             *
             * For a full list of r.js build options see:
             *
             * https://github.com/jrburke/r.js/blob/master/build/example.build.js
             */
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
                        optimize      : "uglify", // or google closure compiler is also available

                        /**
                         * e.g use the package.json file to get the name of the application
                         */
                        out           : buildDir + "/<%= pkg.bundleName %>.js"
                    }
                }
            },

            /**
             *
             * Minifies CSS files
             *
             * Task Docs: https://npmjs.org/package/grunt-contrib-cssmin
             */
            cssmin: {
                compress: {
                    files: [
                        { src: [ 'src/resources/css/*' ], dest: cssDir + 'main.css' }
                    ]
                }
            },

            /**
             * Removes all files in build folder
             */
            clean: {
                build: [ 'build/' ]
            },

            /**
             * Task Docs: https://npmjs.org/package/grunt-contrib-copy
             */
            copy: {

                /**
                 * Copy task "build" target options go here
                 *
                 * Call from the command line:
                 *
                 * $ grunt copy:build
                 */
                build: {
                    files: [
                        {
                            expand: true,
                            cwd   : 'src/',
                            src   : [
                                'index.html'
                            ],
                            dest  : buildDir
                        },
                    ]
                },

                /**
                 * Copy task "build" target options go here
                 *
                 * Call from the command line:
                 *
                 * $ grunt copy:debug
                 */
                debug: {
                    files: [
                        {
                            expand: true,
                            cwd   : 'src/',
                            src   : [
                                '**'
                            ],
                            dest  : debugDir
                        },
                    ]
                }
            },

            //
            watch: {
                cssmin: {
                    files: [ 'src/resources/**/*.css' ],
                    tasks: ['cssmin']
                }
            }
        }
    );

    // load additional grunt tasks provided by the grunt community
    // the dependencies are defined inside the package.json file

    // "contrib" tasks are maintained and developed by the grunt team
    grunt.loadNpmTasks('grunt-contrib');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-requirejs');

    // Default task which is executed if grunt is called without task arguments
    grunt.registerTask('default', 'build'.split(' '));

    // you can define simple tasks which are composed of other tasks
    grunt.registerTask('build', 'cssmin requirejs uglify copy:build'.split(' '));

    grunt.registerTask('debug', 'copy:debug'.split(' '));


    // for more information on how to implement own tasks see http://gruntjs.com/creating-tasks
};
