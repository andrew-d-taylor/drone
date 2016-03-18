(function () {
    'use strict';

    var controllers = angular.module('controllers', []);

    controllers.controller('MainCtrl', ['$scope', 'DroneAPIService', 'uiGmapGoogleMapApi', '$filter', function($scope, DroneAPIService, uiGmapGoogleMapApi, $filter) {

        $scope.orderByField = 'date';
        $scope.reverseSort = true;

        $scope.setOrder = function(value) {
            $scope.orderByValue = value;
        };

        $scope.map = { center: { latitude: 45, longitude: -73 }, zoom: 8 };

        DroneAPIService.findAll({}, function(data) {
            $scope.droneData = data.strike;
            $scope.onStrikeClick($scope.droneData[$scope.droneData.length - 1]);
        }, function(err) {
            console.log(err);
        });

        $scope.onStrikeClick = function(selected) {
            $scope.map.center = {latitude: selected.lat, longitude: selected.lon};
            $scope.markerCenter = {latitude: selected.lat, longitude: selected.lon};
            console.log("flying to coordinates="+$scope.map.center.latitude+" : "+$scope.map.center.longitude);
        }
    }]);

}());