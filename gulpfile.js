var gulp = require('gulp'),
	jshint = require('gulp-jshint'),
	concat = require('gulp-concat'),
	rename = require('gulp-rename'),
	uglify = require('gulp-uglify');
//add Jasmine
//add browsersync
//add less and jade


gulp.task('js-liniting-compliling', function(){
	return gulp.src('script/lib/*.js')
	.pipe(jshint())
	.pipe(jshint.reporter('default'))
	.pipe(concat('all.js'))
	.pipe(gulp.dest('dist/js'))
	.pipe(rename('all.min.js'))
	.pipe(uglify())
	.pipe(gulp.dest('dist/js'));
});