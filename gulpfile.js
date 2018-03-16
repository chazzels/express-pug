'use strict';
 
var gulp = require('gulp');
var watch = require('gulp-watch');
var sass = require('gulp-sass');
var pug = require('gulp-pug');


gulp.task('default', function() {
	// place code for your default task here
});
 
gulp.task('sass', function () {
	
	return watch('client/sass/**/*.scss', function watchSass() {
		gulp.src('client/sass/**/*.scss')
		.pipe(sass().on('error', sass.logError))
		.pipe(gulp.dest('./client/css'));
	});
	
});


gulp.task('pug', function buildHTML() {
	
	return watch('client/component/**/*.pug', function watchPug() {
		gulp.src('client/component/*.pug')
		.pipe(pug({
			verbose: true
		}))
		.pipe(gulp.dest('client/component/'));
	});
	
});