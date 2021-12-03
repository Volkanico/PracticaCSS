/*.1 para hacer cambios a los css con los archivos scss*/

'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const htmlmin = require('gulp-htmlmin');
const imagemin = require('gulp-imagemin');

function change_scss_css() {
  return gulp.src('./sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./dist/css'));
};

/*-----------------------------------------------------------------------------*/
/*.2 sass:watch */

exports.sasswatch = function() {
  watch('./sass/*.scss', change_scss_css);
}
/*-----------------------------------------------------------------------------*/
/*.3 Per comprimir el css */

function comprimircss() {
    return gulp.src('./sass/**/*.scss')
      .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
      .pipe(gulp.dest('./dist/css'));
  };
  exports.comprimircss = comprimircss
  exports.change_scss_css = change_scss_css


  /*---------------------------------------------------------------------------*/
  /*.4 Minimitzar HTML */
 
gulp.task('minifyHTML', () => {
  return gulp.src('./html/*.html')
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest('./dist/html'));
});

 /*---------------------------------------------------------------------------*/
  /*.5 Minimitzar Imatges */
 
exports.MinifyImg = () => (
  gulp.src('./img/*')
    .pipe(imagemin())
    .pipe(gulp.dest('dist/img'))
);