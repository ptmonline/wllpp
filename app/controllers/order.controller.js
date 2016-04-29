// 'use strict';
// class OrderController{
//   constructor(){
//     this.reverse;
//     this.predicate;
//   }
//   order(predicate) {
//       this.reverse = (this.predicate === predicate) ? !this.reverse : false;
//       this.predicate = predicate;
//     }
//   openModal(){
//     let myblank = document.getElementById('blank');
//     myblank.classList.remove('hidden');
//   }
//   openMobileHeader(){
//     //TODO: Refactor this!
//     let brg = document.getElementById('brgbtn');
//     let hbox = document.getElementById('header-box');
//     brg.classList.toggle('open');
//     hbox.classList.toggle('active');
//   }
// }
// export default OrderController;
angular.module('wallapop')
  .controller('orderController', function($scope){
    $scope.hello = 'fuck';
    $scope.openModal = function(){
        console.log('opening....')
        var myblank = document.getElementById('blank');
        myblank.classList.remove('hidden');
      }
  })
