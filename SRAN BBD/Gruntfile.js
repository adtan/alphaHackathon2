'use strict';

var port = 4000;

module.exports = function (grunt) {


    grunt.initConfig({

        express: {
            dev: {
                options: {
                    script: 'app.js'
                }
            }
        },

        open: {
            dev: {
                url: 'http://localhost:' + port
            }
        },

        watch: {
            client: {
                files: [
                    'client/**/*.{js,json,html,css,scss}'
                ],
                //tasks: ['sass:dev'],
                options: {
                    livereload: true
                }
            }
        },
        
        sass: {
            dev: {
                options: {
                    style: 'expanded'
                },
                files: {
                    'client/styles/styles.css': 'client/styles/styles.scss'
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-express-server');
    grunt.loadNpmTasks('grunt-open');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-sass');

    grunt.registerTask('develop', "Starts server and client - for development", ['express:dev', 'open:dev', 'watch:client']);

};
