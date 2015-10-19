var gulp = require('gulp');
var jshint = require('gulp-jshint');
var connect = require('gulp-connect');
var livereload = require('gulp-livereload');
var nodemon = require('gulp-nodemon');
var notify = require('gulp-notify');


gulp.task('nodemon', function(){
	livereload.listen();
	nodemon({
		script: 'server/bin/www',
		ext: 'js' 
	}).on('restart', function(){
		gulp.src('server/bin/www')
			.pipe(livereload())
			// .pipe(notify('Reloading, please wait...'));
	});
});


gulp.task('jshint', function() {
  return gulp.src(['server/**/*.js', 'client/public/js/*.js', 'client/public/angular/*.js']) // update path!
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'));
});


gulp.task('watch', function() {
  gulp.watch(['client/public/js/*.js', 'client/public/angular/*.js'], ['jshint']); // update path!
});

gulp.task('default', ['jshint', 'nodemon', 'watch']);