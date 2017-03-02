'use strict';

/**
 * @ngdoc function
 * @name burgerApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the burgerApp
 */
angular.module('burgerApp')
  .controller('MainCtrl', function ($scope) {
    $scope.routeIsActive = 'burger';
  });
