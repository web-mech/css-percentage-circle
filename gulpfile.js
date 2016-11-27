var gulp = require('gulp'),
  path = require('path'),
  rename = require('gulp-rename'),
  less = require('gulp-less');


gulp.task('build', function() { 
  return gulp.src('less/circle.less')
    .pipe(less({}))
    .pipe(rename('circle.css'))
    .pipe(gulp.dest('css'));
});