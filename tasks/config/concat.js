module.exports = function(gulp){
    'use strict';
    return gulp.task('concat', function(){
        gulp.src('assets/src/app/**/*.js')
        .pipe(require('gulp-concat')('app.min.js'))
        .pipe(gulp.dest('assets/src/'));
    });
};
