'use strict';
class NavBarContainer{
  constructor() {
        this.templateUrl = './templates/navbar.directive.html';
        this.restrict = 'E';
        this.replace = false;
        this.controller = 'MyController';
        this.controllerAs = 'myCtrl';
        this.bindToController = true;
        this.transclude= true
  }
}

export default NavBarContainer;
