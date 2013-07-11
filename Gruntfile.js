module.exports = function (grunt) {

    // Project configuration.
    grunt.initConfig({
            pkg: grunt.file.readJSON('package.json'),

            requirejs: {
                compile: {
                    options: {
                        // main file to start to look for its dependencies.
                        name          : 'app',
                        baseUrl       : "src/app",
                        mainConfigFile: "src/config.js",
                        optimize      : "uglify",
                        out           : buildDir + "application.min.js"
                    }
                }
            },

            watch: {

            },

            clean: {
                build: [
                    'build/'
                ]
            },

            copy: {
                build: {
                }
            }
        }
    );

    grunt.loadNpmTasks('grunt-contrib');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-buster');
    grunt.loadNpmTasks('grunt-contrib-requirejs');
    grunt.loadNpmTasks('grunt-contrib-handlebars');

    // Default task.
    grunt.registerTask('test', 'buster:dev');
    grunt.registerTask('default', 'build'.split(' '));
    grunt.registerTask('build', 'compass handlebars requirejs copy:build'.split(' '));
    grunt.registerTask('debug', 'compass handlebars copy:debug'.split(' '));
    grunt.registerTask('dist', 'clean compass:dist handlebars requirejs copy:build copy:dist'.split(' '));

};
