module.exports = function(grunt) {

  grunt.initConfig({

    watch: {
      scripts: {
        files: ['js/app/**/*.js'],
        tasks: ['concat:dev'],
        options: {
          spawn: false,
        },
      },
      css: {
        files: 'stylesheets/scss/**/*.scss',
        tasks: ['sass:dev']
      },
      eslint: {
        files: 'js/app/**/*.js',
        tasks: ['eslint']
      }
    },
    eslint: {
        target: ['js/app/**/*.js']
    },
    concat: {
      options: {
        separator: '\n\n',
      },
      dev: {
        src: ['js/app/appModule.js', 'js/app/modules/**/*Module.js', 'js/app/**/*.js' ],
        dest: 'js/app.min.js',
      },
    },
    uglify: {
      dist: {
        files: {
          'dist/js/app/app.min.js': ['dist/js/app/app.min.js']
        }
      }
    },
    sass: {
      dev: {
        files: {
          'dist/stylesheets/main.css': 'stylesheets/sass/main.scss'
        }
      }
    },
    clean: ['dist'],
    cleanjs: ['dist/js/app'],
    cleancss: ['dist/stylesheets/'],
    copy: {
      main: {
        files: [
          // includes files within path and its sub-directories
          {expand: true, src: ['images/**'], dest: 'dist/'},
          {expand: true, src: ['js/lib/**'], dest: 'dist/'},
          {expand: true, src: ['js/main.js'], dest: 'dist/'},

          {expand: true, src: ['js/app/**/*.html'], dest: 'dist/'},
          {expand: true, src: ['.htaccess'], dest: 'dist/'},
          {expand: true, src: ['index.html'], dest: 'dist/'},

        ]
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-eslint');
  grunt.loadNpmTasks('grunt-contrib-clean');

  grunt.registerTask('build',
    [
      'eslint',
      'concat:dev',
      'sass:dev',
      'clean',
      'copy:main'
    ]
  );

};
