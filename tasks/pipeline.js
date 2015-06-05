'use strict';

var bowerFiles = [
    'angular/angular.min.js'
  , 'angular-ui-router/release/angular-ui-router.min.js'
];

var jsFiles = [
    'app.min.js'
];

module.exports.bower = bowerFiles.map(function(path){
    return 'assets/components/' + path;
});

module.exports.js = jsFiles.map(function(path){
    return 'assets/src/' + path;
});
