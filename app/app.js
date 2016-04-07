'use strict';
import angular from 'angular'
import DataService from './services/serviceData.js'
import MyController from './controllers/myController.js'
import ItemContainer from './directives/item.directive.js'
import ModalContainer from './directives/modal.directive.js'
import NavBarContainer from './directives/navbar.directive.js'

angular.module('wallapop',['infinite-scroll'])
  .service('dataService', DataService)
  .controller('MyController', MyController)
  .directive('itemContainer', () => new ItemContainer())
  .directive('modalContainer', () => new ModalContainer())
  .directive('navbarContainer', () => new NavBarContainer())
