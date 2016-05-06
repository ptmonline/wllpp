angular.module('wallapop')
  .filter('selectedProductsFilter', function(){
    return function(item){
      console.log(item);
    }
  })
