angular.module('wallapop')
  .controller('LayoutController', function(JsonDataService, $scope, $http){
    $scope.selectedProducts = [];
    $scope.hello = 'Hello';
    $scope.items = null;
    $scope.init = function(){
      JsonDataService.getData().then(function(data){
        $scope.items = data.items
      })
    }
    $scope.init();
    $scope.class="not_active";

    $scope.openModal = function(){
        var myblank = document.getElementById('blank');
        myblank.classList.remove('hidden');
      };
    $scope.closeModal = function(){
        var myblank = document.getElementById('blank');
        myblank.classList.add('hidden');
      };
    $scope.addProduct = function(product, index){
      if($scope.selectedProducts.indexOf(product) == -1){
        $scope.selectedProducts.push(product);
         this.class = "active"
        console.log('No Exist ... Adding .... product index: ', index)
      }else{
        $scope.selectedProducts.splice($scope.selectedProducts.indexOf(product), 1)
        this.class = "not_active"
        console.log('Exist ... Removing .... product index: ', index)
      }
    };
    $scope.removeFromList = function(index){
      console.log(index);
      $scope.selectedProducts.splice(index, 1);
      console.log(this)
    }
  })
