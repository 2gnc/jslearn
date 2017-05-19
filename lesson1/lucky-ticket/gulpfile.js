var gulp = require('gulp');
var sass = require('gulp-sass');
var pug = require('gulp-pug');

gulp.task('sassToCss', function(){
	gulp.src('assets/*.scss')
		.pipe(sass())
		.pipe(gulp.dest('lucky-ticket/style'))
});

gulp.task('pugToHTML', function(){
	gulp.src('assets/*.pug')
		.pipe(pug())
		.pipe(gulp.dest('lucky-ticket'))
});


gulp.task('default', ['sassToCss', 'pugToHTML']);