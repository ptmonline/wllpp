'use strict';
class ModalContainer{
  constructor() {
        this.templateUrl = './templates/modal.directive.html';
        this.restrict = 'E';
        this.replace = false;
        this.controller = 'MyController';
        this.controllerAs = 'myCtrl';
        this.bindToController = true;
        this.transclude= true
  }
}

export default ModalContainer;
