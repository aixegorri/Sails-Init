
module.exports = function(gulp){
    'use strict';
    gulp.task('watch', function(){
        var browserSync = require('browser-sync');
        gulp.watch(['views/*'], function(){
            browserSync.reload();
        });

        gulp.watch('assets/src/app/**/*.js', function(){
            gulp.start('concat');
            browserSync.reload();
        });
    });
};
