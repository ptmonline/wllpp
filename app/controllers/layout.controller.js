angular.module('wallapop')
  .controller('LayoutController', function(JsonDataService, $scope, $http){
    $scope.hello = 'Hello';
    $scope.items = null;
    $scope.init = function(){
      JsonDataService.getData().then(function(data){
        $scope.items = data.items
      })
    }
    $scope.init();
    $scope.class="not_active";
    $scope.activeClass = function(){
      $scope.class === 'not_active' ? $scope.class = "active" : $scope.class = "not_active";
    };
    $scope.openModal = function(){
        var myblank = document.getElementById('blank');
        myblank.classList.remove('hidden');
      }
  })
