'use strict';
 import DataService from './services/serviceData.js'
 import MyController from './controllers/myController.js'

angular.module('wallapop',[])
  .service('dataService', DataService)
  .controller('MyController', MyController);

// function myController($scope, myData){
//     $scope.hello = 'Hello Angular'
//     var myList = [];
//     $scope.mySuperList = myList
//     myData.getData().then(function(result){
//       $scope.data = result["items"];
//     })
//     $scope.order = function(predicate) {
//       $scope.reverse = ($scope.predicate === predicate) ? !$scope.reverse : false;
//       $scope.predicate = predicate;
//     };
//     $scope.addToMyList = function(item){
//       myList.push(item);
//       // console.log(myList)
//     }
//     $scope.openModal = function(){
//       myblank = document.getElementById('blank');
//       // mymodal = document.getElementById('mymodal');
//       // mymodal.classList.remove('hidden');
//       myblank.classList.remove('hidden');
//     }
//   };
// // function myData ($http){
//   return {
//     getData: function() {
//       return $http.get('items.json')
//         .then(function(result) {
//           return result.data;
//         });
//       }
//    }
// }
// class MyData {
//     constructor($http) {
//         this.$http = $http;
//     }
//     getData() {
//         return this.$http.get('items.json')
//           .then(function(result) {
//             return result.data;
//           });
//         }
//     }
//     class UserService {
//         constructor($http) {
//             this.$http = $http;
//         }
//         getFullName() {
//             return this.$http.get('items.json');
//         }
//     }
//     class MyController {
//     constructor(userService) {
//         userService.getFullName()
//             .then(result => this.data = result["items"]);
//     }
// }
