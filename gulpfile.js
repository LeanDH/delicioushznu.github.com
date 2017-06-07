var gulp = require('gulp');
var cssmin = require('gulp-minify-css');
var imagemin = require('gulp-imagemin');
var pngquant = require('imagemin-pngquant');
//var smushit = require('gulp-smushit');

// gulp.task('smushitaa', function () {
//     return gulp.src('img/*')
//         .pipe(smushit())
//         .pipe(gulp.dest('example/'));
// });

gulp.task('deepimagemin', function () {
    return gulp.src('img/*')
        .pipe(imagemin({
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            use: [pngquant()] 
        }))
        .pipe(gulp.dest('img/'));
});
gulp.task('testcssmin', function () {
    gulp.src('css/*.css')
        .pipe(cssmin({
            keepBreaks: false,
        }))
        .pipe(gulp.dest('css/'));
});

