'use strict';
class ItemContainer{
  constructor() {
        this.templateUrl = './templates/item.directive.html';
        this.restrict = 'E';
        this.replace = true;
        this.controller = 'MyController';
        this.controllerAs = 'myCtrl';
        this.bindToController = true;
        this.transclude= true;
  }
}

export default ItemContainer;
