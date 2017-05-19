var gulp = require('gulp'),
	sass = require('gulp-sass'),
	pug = require('gulp-pug')
	watch = require('gulp-watch');

gulp.task('sassToCss', function() {
	function run() {
		return gulp.src('assets/*.scss', 'assets/!_*.scss') // return заставляет команды запускаться параллельно?
		.pipe(sass())
		.pipe(gulp.dest('lucky-ticket/style'))
	}
	watch('assets/*.scss', run);
	return run();
});

gulp.task('pugToHTML', function() {
	function run() {
		return gulp.src('assets/*.pug')
		.pipe(pug())
		.pipe(gulp.dest('lucky-ticket'))
	}
	watch('assets/*.pug', run);
	return run();
});


gulp.task('default', ['sassToCss', 'pugToHTML']);