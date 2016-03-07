
(function () {
    'use strict';

    var services = angular.module('services', ['ngResource']);

    services.factory('DroneAPIService',[ '$resource', function ($resource) {
        return $resource('/api/drones', {}, {
            findAll : {
                method: 'GET',
                isArray : false
            }
        });
    }]);

}());