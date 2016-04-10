'use strict';
class ItemContainer{
  constructor() {
        this.templateUrl = './templates/item.directive.html';
        this.restrict = 'E';
        this.replace = true;
        this.controller = 'LayoutController';
        this.controllerAs = 'layoutCtrl';
        this.bindToController = true;
        this.transclude= true;
  }
}

export default ItemContainer;
