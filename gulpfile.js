var   gulp = require('gulp');
sass = require('gulp-sass');
rename = require('gulp-rename');
cssmin = require('gulp-cssmin');


gulp.task('sass', function () {
  return gulp.src('./src/assets/sass/main.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(cssmin())
    .pipe(rename({
      basename: "bundle"
    }))
    .pipe(gulp.dest('./src/'));
});

gulp.task('sass:watch', function () {
  gulp.watch('./src/assets/sass/**/*.scss', ['sass']);
});

gulp.task('default', ['sass:watch']);

