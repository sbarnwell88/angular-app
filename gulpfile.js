// grab our gulp packages
var gulp  = require('gulp'),
jshint = require('gulp-jshint');
gutil = require('gulp-util');

// create a default task and just log a message
// gulp.task('default', function() {
// return gutil.log('Gulp is running!')
// });

// define the default task and add the watch task to it
gulp.task('default', ['watch']);

// configure the jshint task
gulp.task('jshint', function() {
    return gulp.src('src/users/**/*.js')
      .pipe(jshint())
      .pipe(jshint.reporter('jshint-stylish'));
  });

  // configure which files to watch and what tasks to use on file changes
gulp.task('watch', function() {
    gulp.watch('src/users/*.js', ['jshint']);
  });