(function () {
    'use strict';

    var app = angular.module('app', ['ngRoute', 'controllers','services']);

    app.config(function ($routeProvider, $httpProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/main.html',
                controller: 'MainCtrl'
            })
            .otherwise({redirectTo: '/'});
        $httpProvider.defaults.headers.common["X-Requested-With"] = 'XMLHttpRequest';
    });

}());