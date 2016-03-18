(function () {
    'use strict';

    var app = angular.module('app', ['uiGmapgoogle-maps','ngRoute', 'controllers','services', 'angularUtils.directives.dirPagination']);

    app.config(function ($routeProvider, $httpProvider, $sceDelegateProvider) {

        $routeProvider
            .when('/', {
                templateUrl: 'views/main.html',
                controller: 'MainCtrl'
            })
            .otherwise({redirectTo: '/'});

        $httpProvider.defaults.headers.common["X-Requested-With"] = 'XMLHttpRequest';

    });

    app.config(function (uiGmapGoogleMapApiProvider) {

        var key = retrieveMapsApiKey();

        //Insert your API key here
        uiGmapGoogleMapApiProvider.configure({
            key: key,
            v: '3.20',
            libraries: 'weather,geometry,visualization'
        });
    })

}());