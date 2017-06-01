var gulp = require( 'gulp' ),
	pug = require( 'gulp-pug' );

gulp.task('pug', function() {
	return gulp.src('src/**.pug')
	.pipe(pug())
	.pipe(gulp.dest('app/'));
});

gulp.task( 'watch', function() {
	gulp.watch( 'src/**.pug', ['pug'] );
});