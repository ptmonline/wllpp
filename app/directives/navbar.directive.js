'use strict';
class NavBarContainer{
  constructor() {
        this.templateUrl = './templates/navbar.directive.html';
        this.restrict = 'E';
        this.replace = false;
        this.controller = 'OrderController';
        this.controllerAs = 'orderCtrl';
        this.bindToController = true;
        this.transclude= true
  }
}

export default NavBarContainer;
