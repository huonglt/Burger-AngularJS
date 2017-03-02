'use strict';

/**
 * @ngdoc overview
 * @name burgerApp
 * @description
 * # burgerApp
 *
 * Main module of the application.
 */
angular
  .module('burgerApp', [
    'ngAnimate',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/burger', {
        templateUrl: 'views/burger.html',
        controller: 'BurgerCtrl',
        controllerAs: 'burger'
      })
      .otherwise({
        redirectTo: '/about'
      });
  });
