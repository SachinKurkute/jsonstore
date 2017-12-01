(function () {
    'use strict';
    
    var app = angular.module("jsonstore", ["ui.router"]);
    app.config(function($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/home');
        $stateProvider
            .state('home', {
                url: '/home/:id',
                templateUrl : "app/html/home.html",
                controller : 'homeCtrl'
            })
            .state('store',{
                url: '/store',
                templateUrl : "app/html/store.html",
                controller : 'storeCtrl'
            })
    });
})();