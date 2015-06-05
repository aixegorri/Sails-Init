module.exports = function(gulp){
    'use strict';
    gulp.task('default', ['concat', 'linker', 'browserSync', 'watch']);
};
