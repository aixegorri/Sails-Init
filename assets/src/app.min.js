angular.module('app', ['ui.router'])
.config(function($stateProvider, $urlRouterProvider) {
    'use strict';
    $urlRouterProvider.otherwise('/');
    $stateProvider.state('index', {
        url: '/'
    });
});
