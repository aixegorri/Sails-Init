module.exports = function(gulp){
    'use strict';

    var browserSync = require('browser-sync');
    gulp.task('browserSync', function(){
        browserSync.init(null, {
            proxy: 'localhost:1337'
          , port: 9000
          , open: false
        });
    });
};
