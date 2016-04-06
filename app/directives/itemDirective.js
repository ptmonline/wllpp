'use strict';
class ItemContainer{
  constructor() {
        this.templateUrl = './templates/itemTemplate.html';
        this.restrict = 'E';
        this.replace = false;
        this.controller = 'MyController';
        this.bindToController = true;
        this.transclude= true

    }
}

export default ItemContainer;
