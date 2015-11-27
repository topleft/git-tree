/**
 * Module Dependencies
 */

var gulp = require('gulp');
var jshint = require('gulp-jshint');
var browserSync = require('browser-sync');
var reload = browserSync.reload;
var nodemon = require('gulp-nodemon');
var connect = require('gulp-connect');
var uglify = require('gulp-uglify');
var minifyCSS = require('gulp-minify-css');
var clean = require('gulp-clean');
var concat = require('gulp-concat');
var runSequence = require('run-sequence');
var mocha = require('gulp-mocha');
var sass = require('gulp-sass');


/**
 * Config
 */

var paths = {
  sass: [
    './client/public/styles/scss/*.scss',
  ],
  styles: [
    './client/public/styles/css/*.css',
  ],
  scripts: [
    '.client/public/js/*.js',
  ],
  server: [
    './server/bin/www'
  ],
  test: [
    'test/*.js'
  ]
  // foundationJS: [
  //   'bower_components/fastclick/lib/fastclick.js',
  //   'bower_components/viewport-units-buggyfill/viewport-units-buggyfill.js',
  //   'bower_components/tether/tether.js',
  //   'bower_components/hammerjs/hammer.js',
  //   'bower_components/angular/angular.js',
  //   'bower_components/angular-animate/angular-animate.js',
  //   'bower_components/angular-ui-router/release/angular-ui-router.js',
  //   'bower_components/foundation-apps/js/vendor/**/*.js',
  //   'bower_components/foundation-apps/js/angular/**/*.js',
  //   '!bower_components/foundation-apps/js/angular/app.js'
  // ],
};

var nodemonConfig = {
  script: paths.server,
  ext: 'html js css',
  ignore: ['node_modules']
};

var nodemonDistConfig = {
  script: paths.distServer,
  ext: 'html js css',
  ignore: ['node_modules']
};


/**
 * Gulp Tasks
 */

gulp.task('lint', function() {
  return gulp.src(paths.scripts)
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'));
});

gulp.task('browser-sync', ['nodemon'], function(done) {
  browserSync({
    proxy: "localhost:3000",  // local node app address
    port: 5000,  // use *different* port than above
    notify: true
  }, done);
});

gulp.task('styles', function () {
  return gulp.src(paths.sass)
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./client/public/styles/css'));
});

gulp.task('sass:watch', function () {
  gulp.watch(paths.sass, ['styles']);
});

gulp.task('nodemon', function (cb) {
  var called = false;
  return nodemon(nodemonConfig)
  .on('start', function () {
    if (!called) {
      called = true;
      cb();
    }
  })
  .on('restart', function () {
    setTimeout(function () {
      reload({ stream: false });
    }, 1000);
  });
});

gulp.task('watch', function() {
  gulp.watch(paths.scripts, ['lint']);
});

gulp.task('clean', function() {
  gulp.src('./dist/*')
    .pipe(clean({force: true}));
});

gulp.task('minify-css', function() {
  var opts = {comments:true, spare:true};
  gulp.src(paths.styles)
    .pipe(minifyCSS(opts))
    .pipe(gulp.dest('./dist/client/css/'));
});

gulp.task('minify-js', function() {
  gulp.src(paths.scripts)
    .pipe(uglify())
    .pipe(gulp.dest('./dist/client/js/'));
});

gulp.task('copy-server-files', function () {
  gulp.src('./src/server/**/*')
    .pipe(gulp.dest('./dist/server/'));
});


gulp.task('connectDist', function (cb) {
  var called = false;
  return nodemon(nodemonDistConfig)
  .on('start', function () {
    if (!called) {
      called = true;
      cb();
    }
  })
  .on('restart', function () {
    setTimeout(function () {
      reload({ stream: false });
    }, 1000);
  });
});

gulp.task('test', function(){
  gulp.src(paths.test, {read: false})
    .pipe(mocha({}));
});

// *** default task *** //
gulp.task('default', ['browser-sync', 'watch', 'sass:watch'], function(){});

// *** build task *** //
gulp.task('build', function() {
  runSequence(
    ['clean'],
    ['lint', 'minify-css', 'minify-js', 'copy-server-files', 'connectDist']
  );
});


// Compiles the Foundation for Apps directive partials into a single JavaScript file
// gulp.task('copy:foundation', function(cb) {
//   gulp.src('bower_components/foundation-apps/js/angular/components/**/*.html')
//     .pipe($.ngHtml2js({
//       prefix: 'components/',
//       moduleName: 'foundation',
//       declareModule: false
//     }))
//     .pipe($.uglify())
//     .pipe($.concat('templates.js'))
//     .pipe(gulp.dest('./cilent/public/views/'))
//   ;

//   cb();
// });

// Compiles and copies the Foundation for Apps JavaScript
// gulp.task('uglify', ['uglify:foundation']);

// gulp.task('uglify:foundation', function(cb) {
//   var uglify = $.if(isProduction, $.uglify()
//     .on('error', function (e) {
//       console.log(e);
//     }));

//   return gulp.src(paths.foundationJS)
//     .pipe(uglify)
//     .pipe($.concat('foundation.js'))
//     .pipe(gulp.dest('./client/public/js/'))
//   ;
// });
