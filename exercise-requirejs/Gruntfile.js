module.exports = function (grunt) {

    var buildDir = 'build/';
    var cssDir = buildDir + 'resources/css/';

    // Project configuration.
    grunt.initConfig({
            pkg: grunt.file.readJSON('package.json'),

            uglify: {

                options: {
                    compress:true
                },

                build: {
                    files: [
                        { src: ['app.js'], dest: buildDir + 'app.js' }
                    ]
                }
            },

            cssmin: {
                compress: {
                    files: [
                        { src: [ 'resources/css/*' ], dest: cssDir + 'main.css' }
                    ]
                }
            },

            clean: {
                build: [ buildDir ]
            },

            copy: {
                build: {
                    files: [
                        { src: ['index.html'], dest: buildDir }
                    ]
                }
            }
        }
    );

    grunt.loadNpmTasks('grunt-contrib');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-cssmin');

    // Default task.
    grunt.registerTask('default', 'build'.split(' '));
    grunt.registerTask('build', 'cssmin uglify:build copy:build'.split(' '));
};
