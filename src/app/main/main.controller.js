'use strict';

angular.module('angularMosimosi').controller('MainCtrl', function ($scope, $interval) {

  $scope.message = '髪を切る'

  $scope.tasks = [];

  $scope.addOnClick = function(event) {
    $scope.tasks.push( {
      'message': $scope.message,
      'x': event.offsetX-14,
      'y': event.offsetY-16
    });
  };

  var displayTime = function () {
    $scope.time = new Date();
  };

  displayTime = $interval(displayTime, 1000);


});
