(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _serviceData = require('./services/serviceData.js');

var _serviceData2 = _interopRequireDefault(_serviceData);

var _myController = require('./controllers/myController.js');

var _myController2 = _interopRequireDefault(_myController);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

angular.module('wallapop', []).service('dataService', _serviceData2.default).controller('MyController', _myController2.default);

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

},{"./controllers/myController.js":2,"./services/serviceData.js":3}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var MyController = function () {
  function MyController(dataService) {
    var _this = this;

    _classCallCheck(this, MyController);

    this.myList = [];
    this.hello = "Hello Angular";
    this.reverse;
    this.predicate;
    dataService.getData().then(function (result) {
      return _this.data = result['items'];
    });
  }

  _createClass(MyController, [{
    key: 'order',
    value: function order(predicate) {
      this.reverse = this.predicate === this.predicate ? !this.reverse : false;
      this.predicate = this.predicate;
    }
  }, {
    key: 'addToMyList',
    value: function addToMyList(item) {
      this.myList.push(item);
      console.log(this.myList);
    }
  }, {
    key: 'openModal',
    value: function openModal() {
      var myblank = document.getElementById('blank');
      myblank.classList.remove('hidden');
    }
  }]);

  return MyController;
}();

MyController.$inject = ['dataService'];
exports.default = MyController;

},{}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var DataService = function () {
  function DataService($http) {
    _classCallCheck(this, DataService);

    this.$http = $http;
  }

  _createClass(DataService, [{
    key: 'getData',
    value: function getData() {
      return this.$http.get('items.json').then(function (result) {
        return result.data;
      });
    }
  }]);

  return DataService;
}();

exports.default = DataService;

},{}]},{},[1]);
