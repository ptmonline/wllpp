angular.module('wallapop')
  .controller('layoutController', function($scope, $http){
    $scope.hello = 'Hello';
    $http.get('items.json').success(function(data){
      $scope.items = data.items;
    })
  })
