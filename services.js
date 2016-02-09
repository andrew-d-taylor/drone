(function () {
    'use strict';

    /* Services */

    var services = angular.module('services', ['ngResource']);

    services.factory('DroneAPIService',[ '$resource', function ($resource) {
        return $resource('data/strikes.json', {}, {
            findAll : {
                method: 'GET',
                isArray : false
            }
        });
    }]);


}());