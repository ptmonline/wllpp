'use strict';
angular.module('wallapop')
  .directive('navbarContainer', function(){
    return{
      restrict: 'E',
      // templateUrl: './templates/navbar.directive.html',
      template: '<div class="fuckThisShit"><h1>Go Fuck Yourself!!</h1></div>',
      controller: 'orderController',
      controllerAs: 'orderCtrl',
      replace: true
    }
  })
