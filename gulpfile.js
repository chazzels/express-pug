'use strict';
 
var gulp = require('gulp');
var sass = require('gulp-sass');


gulp.task('default', function() {
  // place code for your default task here
});
 
gulp.task('sass', function () {
  return gulp.src('./client/sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./client/css'));
});
 
gulp.task('sass:watch', function () {
  gulp.watch('./client/sass/**/*.scss', ['sass']);
});
