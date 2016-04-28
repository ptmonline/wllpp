'use strict';
angular.module('wallapop')
  .directive('itemContainer', function(){
    return{
      restrict: 'E',
      replace: false,
      templateUrl: './templates/item.directive.html',
      controller: 'LayoutController',
      controllerAs: 'layoutCtrl'
    }
  })
