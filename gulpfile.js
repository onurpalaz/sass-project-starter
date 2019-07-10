const gulp          = require('gulp');
const browserSync   = require('browser-sync').create();
const sass          = require('gulp-sass');


// Compile Sass
gulp.task('sass', function() {
    return gulp.src(['src/scss/*.scss'])
                .pipe(sass())
                .pipe(gulp.dest('dist/css'))
                .pipe(browserSync.stream());
});

// Watch & Serve
gulp.task('serve', gulp.series(['sass'], function() {
    browserSync.init({
        server: './dist'
    });
    gulp.watch(['src/scss/*.scss'], gulp.series(['sass']));
    gulp.watch(['dist/*.html']).on('change', browserSync.reload);
}));

// Default
gulp.task('default', gulp.series(['serve']));
