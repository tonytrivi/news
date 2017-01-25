module.exports = function(grunt) {

    grunt.registerTask( 'default', [ 'clean', 'copy', 'hapi', 'watch', 'sass'] );

    grunt.registerTask( 'build', [ 'clean', 'copy' ] );

    grunt.registerTask( 'run', [ 'hapi', 'watch' ]);

    grunt.initConfig({

        watch: {
            hapi: {
                files: [
                    './app/assets/**/*.{png,jpg,jpeg,mp3,svg}',
                    './app/scripts/**/*.js',
                    './app/styles/**/*.css',
                    './app/sass/**/*.scss',
                    './app/pages/**/*.html',
                    './app/templates/**/*.html',
                    'Gruntfile.js'
                ],
                tasks: [
                    'clean',
                    'copy'
                ],
                options: {
                    spawn: false
                }
            },


        },


        copy: {
            dist: {
                files: [{
                    expand: true,
                    src: [ './assets/**/*.{png,jpg,jpeg,mp3,svg}' ],
                    dest: './dist',
                    cwd: './app'
                }, {
                    expand: true,
                    src: [ './**/*.html' ],
                    dest: './dist',
                    cwd: './app/pages'
                }, {
                    expand: true,
                    src: [ './**/*.css' ],
                    dest: './dist/styles',
                    cwd: './app/styles'
                }, {
                    expand: true,
                    src: [ './**/*.scss' ],
                    dest: './dist/',
                    cwd: './app/'
                }, {
                    expand: true,
                    src: [ './**/*.js' ],
                    dest: './dist/scripts',
                    cwd: './app/scripts'
                }, {
                    expand: true,
                    src: [ './**/*.html' ],
                    dest: './dist/templates',
                    cwd: './app/templates'
                }]
            }
        },

        sass: {                              // Task
          dist: {                            // Target
            options: {                       // Target options
              style: 'expanded'
            },
            files: {                         // Dictionary of files
              './dist/styles/main.css': './app/sass/main.scss'       // 'destination': 'source'
            }
          }
        },

      hapi: {
          custom_options: {
              options: {
                  server: require('path').resolve('./server'),
                  bases: {
                      '/dist': require('path').resolve('./dist/')
                  }
              }
          }
      },

        clean: ['./dist']
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-hapi');
    grunt.loadNpmTasks('grunt-contrib-sass');

};
