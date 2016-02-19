(function () {
    'use strict';

    var controllers = angular.module('controllers', []);

    controllers.controller('MainCtrl', ['$scope', 'DroneAPIService', 'uiGmapGoogleMapApi', function($scope, DroneAPIService, uiGmapGoogleMapApi) {

        $scope.map = { center: { latitude: 45, longitude: -73 }, zoom: 8 };

        DroneAPIService.findAll({}, function(data) {
            $scope.droneData = data.strike;
            console.log("Loaded json")
        }, function(err) {
            console.log(err);
        });

        $scope.onStrikeClick = function(selected) {
            $scope.map.center = {latitude: selected.lat, longitude: selected.lon}
        }

    }]);

}());