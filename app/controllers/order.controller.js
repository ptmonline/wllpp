'use strict';
class OrderController{
  constructor(){
    this.reverse;
    this.predicate;
  }
  order(predicate) {
      this.reverse = (this.predicate === predicate) ? !this.reverse : false;
      this.predicate = predicate;
    }
    openModal(){
      let myblank = document.getElementById('blank');
      myblank.classList.remove('hidden');
    }
}
export default OrderController;
