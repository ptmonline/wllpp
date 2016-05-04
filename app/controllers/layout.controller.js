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
    // $scope.activeClass = function(item){
    //   this.class === 'not_active' ? this.class = "active" : this.class = "not_active";
    //   localStorage.setItem('item', item)
    // };
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
        console.log($scope.selectedProducts)
        this.class = "not_active"
        console.log('Exist ... Removing .... product index: ', index)
      }
      // $scope.selectedProducts.push(product);
      // this.class === 'not_active' ? this.class = "active" : this.class = "not_active";
      // console.log($scope.selectedProducts.length);
      // console.log(index)
    }
  })
