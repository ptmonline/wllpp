'use strict';
angular.module('wallapop')
  .directive('navbarContainer', function(){
    return{
      restrict: 'E',
      templateUrl: './templates/navbar.directive.html',
      controller: 'orderController',
      controllerAs: 'orderCtrl',
      replace: false,
    }
  })
