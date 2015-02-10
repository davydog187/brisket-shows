'use strict';

function configureGrunt(grunt) {
    grunt.loadNpmTasks('grunt-browserify');
    grunt.loadNpmTasks('grunt-hogan');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks("grunt-concurrent");
    grunt.loadNpmTasks('grunt-exec');

    grunt.initConfig({

        browserify: {
            build: {
                src: [
                    './app/javascripts/**/*.js',
                    './app/build/templates.js'
                ],
                dest: './public/javascripts/application.js',
                options: {
                    alias: [
                        './node_modules/brisket/lib/brisket.js:brisket',
                        './app/javascripts/client/ClientApp.js:app/ClientApp'
                    ],
                    ignore: [
                        './app/javascripts/server/**/*.js',
                        './node_modules/brisket/lib/server/**/*.js'
                    ],
                    shim: {
                        'jquery-mockjax': {
                            path: 'node_modules/brisket/node_modules/jquery-mockjax/jquery.mockjax.js',
                            exports: null,
                            depends: {
                                jquery: 'jQuery'
                            }
                        }
                    }
                }
            }

        },

        hogan: {
            compile: {
                src: [
                    "app/templates/**/*.html",
                ],
                dest: "app/build/templates.js",
                options: {
                    binderName: "nodejs",
                    nameFunc: stripPathAndExtension,
                    exposeTemplates: true
                }
            }
        },

        clean: {
            js: [
                'public/javascripts',
            ],
            html: [
                "app/build/templates.js"
            ]
        },

        exec: {
            nodemon: {
                cmd: 'node_modules/.bin/nodemon server.js'
            }
        },

        concurrent: {
            server: {
                tasks: [
                    "exec:nodemon",
                    "watch"
                ],
                options: {
                    logConcurrentOutput: true
                }
            }
        },

        watch: {
            options: {
                interrupt: true,
                debounceDelay: 250
            },
            js: {
                files: [
                    'app/javascripts/**/*.js',
                    'server.js',
                    'Gruntfile.js',
                ],
                tasks: [
                    'build',
                ]
            }
        }

    });


    grunt.registerTask('build', [
        'clean:js',
        'clean:html',
        'hogan:compile',
        'browserify:build'
    ]);

    grunt.registerTask('server', [
        'build',
        'concurrent:server',
    ]);

    grunt.registerTask('default', ['server']);
}

function stripPathAndExtension(file) {
    return file.replace("app/templates/", "").split(".")[0];
}

module.exports = configureGrunt;
