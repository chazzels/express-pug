'use strict';
 
var gulp = require('gulp');
var sass = require('gulp-sass');
var pug = require('gulp-pug');


gulp.task('default', function() {
	// place code for your default task here
});
 
gulp.task('sass', function () {
	return gulp.src('./client/sass/**/*.scss')
		.pipe(sass().on('error', sass.logError))
		.pipe(gulp.dest('./client/css'));
});


gulp.task('pug', function buildHTML() {
	return gulp.src('client/component/**/*.pug')
		.pipe(pug({
			verbose: true
			// Your options in here. 
		}))
		.pipe(gulp.dest('client/component/'));
});