var gulp 					= require( 'gulp' ),
		pug 					= require( 'gulp-pug' ),
		sass 					= require( 'gulp-sass' ),
		csso 					= require( 'gulp-csso' ),
		concat 				= require( 'gulp-concat' ),
		rename 				= require( 'gulp-rename' ),
		browserSync 	= require('browser-sync'),
		autoprefixer 	= require('gulp-autoprefixer');

gulp.task( 'pug', function() {
	return gulp.src( 'src/**.pug' )
	.pipe(pug())
	.pipe(gulp.dest( 'app/' ))
	.pipe(browserSync.reload({stream:true}))
});

gulp.task( 'sass', function() {
	return gulp.src( 'src/**/**.sass' )
	.pipe(sass())
	.pipe(autoprefixer({
		browsers: ['last 3 versions'],
		cascade: false
	}))
	.pipe(csso())
	.pipe(rename({suffix: '.min'}))
	.pipe(gulp.dest( 'app/css/' ))
	.pipe(browserSync.reload({stream:true}))
});

gulp.task( 'jsconcat', function() {
	return gulp.src( 'src/**/**.js' )
	.pipe(concat('scripts.js'))
	.pipe(gulp.dest( 'app/js/' ))
	.pipe(browserSync.reload({stream:true}))
});

gulp.task( 'browserSync', function() {
	browserSync({
		server: {
			baseDir: 'app'
		},
		notify: false
	});
});

//для разовой генерации читабельного CSS
gulp.task( 'cssForCheck', function() {
	return gulp.src( 'src/**/**.sass' )
	.pipe(sass())
	.pipe(autoprefixer({
		browsers: ['last 3 versions'],
		cascade: false
	}))
	.pipe(gulp.dest( 'tmp/' ))
	.pipe(browserSync.reload({stream:true}))
});

gulp.task( 'watch', ['browserSync', 'sass', 'pug', 'jsconcat'], function() {
	gulp.watch( 'src/**/**.**', ['pug', 'sass', 'jsconcat'] );
});

