'use strict';
const gulp = require('gulp');
const sourcemaps = require('gulp-sourcemaps');
const sass = require('gulp-sass');
const autoprefixer = require('autoprefixer');
const postcss = require('gulp-postcss');
const cssnano = require('cssnano');
let uglify = require('gulp-uglify-es').default;
const browserSync = require('browser-sync');

let path = {
    src_sass:'./src/scss/*.scss',
    src_js:'./src/js/**/*.js',
}

gulp.task("sassTask", function() {
    return gulp
        .src(path.src_sass)
        .pipe(sourcemaps.init()) 
        .pipe(sass().on('error', sass.logError))
        .pipe(postcss([ autoprefixer(), cssnano() ])) 
        .pipe(sourcemaps.write('.')) 
        .pipe(gulp.dest('./dist'))
        .pipe(browserSync.stream());
});

gulp.task('jsTask', function() {
    return gulp
      .src(path.src_js)
      .pipe(sourcemaps.init())
      .pipe(uglify())
      .pipe(sourcemaps.write())
      .pipe(gulp.dest('./dist'))
      .pipe(browserSync.stream());
  });

gulp.task('serve', gulp.series('sassTask', function() {
    browserSync.init({
        server: "./"   
    });
  
    gulp.watch(path.src_sass,
      gulp.series('sassTask'));

    gulp.watch(path.src_js,
      gulp.series("jsTask"));

    gulp.watch("*.html").on('change', browserSync.reload);
  }));
  
  gulp.task('default',
    gulp.series('sassTask', "jsTask", 'serve'));