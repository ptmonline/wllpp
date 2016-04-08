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
  openMobileHeader(){
    console.log('hello mobile');
    let brg = document.getElementById('brgbtn');
    let hbox = document.getElementById('header-box');
    brg.classList.toggle('open');
    hbox.classList.toggle('active');
    // brg.addEventListener('click', () => {
    //   brg.classList.toggle('open');
    //   hbox.classList.add('active');
    // })
  }
}
export default OrderController;
