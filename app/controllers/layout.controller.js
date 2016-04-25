angular.module('wallapop')
  .controller('layoutController', function($scope, JsonService){
    $scope.hello = 'Hello';
    $scope.data = [];
    JsonService.get(function(data){
      $scope.data.push(data)
      console.log($scope.data)
    })
  })
