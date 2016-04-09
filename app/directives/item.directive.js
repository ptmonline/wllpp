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
  // link(scope, element){
  //   element.on('click', function(e){
  //     element.addClass('active');
  //   })
  // }
}

export default ItemContainer;
