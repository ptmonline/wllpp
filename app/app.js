'use strict';
import angular from 'angular'
import DataService from './services/service.data.js'
import LayoutController from './controllers/layout.controller.js'
import OrderController from './controllers/order.controller.js'
import ItemContainer from './directives/item.directive.js'
import ModalContainer from './directives/modal.directive.js'
import NavBarContainer from './directives/navbar.directive.js'

angular.module('wallapop',['infinite-scroll'])
  .service('dataService', DataService)
  .controller('LayoutController', LayoutController)
  .controller('OrderController', OrderController)
  .directive('itemContainer', () => new ItemContainer())
  .directive('modalContainer', () => new ModalContainer())
  .directive('navbarContainer', () => new NavBarContainer()) 
