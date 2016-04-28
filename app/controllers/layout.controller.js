angular.module('wallapop')
  .controller('LayoutController', function(JsonDataService, $scope, $http){
    $scope.hello = 'Hello';
    // $http.get('items.json').success(function(data){
    //   $scope.items = data.items;
    // })
    $scope.items = null;
    $scope.init = function(){
      JsonDataService.getData().then(function(data){
        $scope.items = data.items
      })
    }
    $scope.init();
  })
