(function () {
    'use strict';

    var controllers = angular.module('controllers', []);

    controllers.controller('MainCtrl', ['$scope', 'DroneAPIService', function($scope, DroneAPIService) {
        DroneAPIService.findAll({}, function(data) {
            $scope.droneData = data.strike;
            console.log("Loaded json")
        }, function(err) {
            console.log(err);
        })
    }]);

}());