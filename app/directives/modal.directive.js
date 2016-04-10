'use strict';
class ModalContainer{
  constructor() {
        this.templateUrl = './templates/modal.directive.html';
        this.restrict = 'E';
        this.replace = false;
        this.controller = 'LayoutController';
        this.controllerAs = 'layoutCtrl';
        this.bindToController = true;
        this.transclude= true
  }
}

export default ModalContainer;
