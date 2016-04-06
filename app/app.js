'use strict';
import angular from 'angular'
import DataService from './services/serviceData.js'
import MyController from './controllers/myController.js'
import ItemContainer from './directives/itemDirective.js'

angular.module('wallapop',[])
  .service('dataService', DataService)
  .controller('MyController', MyController)
  .directive('itemContainer', () => new ItemContainer())
