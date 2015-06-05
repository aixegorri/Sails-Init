module.exports = function(gulp){
    'use strict';
    gulp.task('linker', function(){
        var linker = require('gulp-linker');
        gulp.src('views/layout.jade')
        .pipe(linker({
            scripts  : [
                require('../pipeline.js').bower
              , require('../pipeline.js').js
          ]
          , startTag : '<!--SCRIPTS-->'
          , endTag   : '<!--SCRIPTS END-->'
          , fileTmpl : 'script(src="%s")'
          , appRoot  : 'assets/'
        }))
        .pipe(gulp.dest('views/'));
    });
};
