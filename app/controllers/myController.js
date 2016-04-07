'use strict';
class MyController {
  constructor(dataService) {
      this.myList = [];
      this.itemId = [];
      this.hello = "Hello Angular";
      this.count = 0;
      this.selectedItem;
      this.displaymore = 4;
      this.divAdded = false;
      dataService.getData()
          .then(result =>
            this.data = result['items']
          );
      // this.reverse;
      // this.predicate;
  }
  addSelected(selection){
    this.selectedItem = "ng-model='search." + selection + "'";
    console.log(this.selectedItem)
  }
  // order(predicate) {
  //     this.reverse = (this.predicate === predicate) ? !this.reverse : false;
  //     this.predicate = predicate;
  //   };
  addToMyList(item, index){
    console.log(index)

    // this.divAdded = false;
    let self=this;

    let addedElem = document.getElementsByClassName('add-to-list');
    addedElem[index].firstChild.innerHTML = 'ADDED'
    let clickElem = document.getElementsByClassName('click-container');
    console.log(addedElem)
    if(clickElem[index].classList.contains('active')){
      return false;
    }else{
      this.myList.push(item);
      this.count +=1
    }
    // console.log(typeof addedElem)
    // addedElem.forEach(function(elem){
    //   console.log('hello')
    // })
    // console.log(addedElem)
    // if(addedElem.classList.contains('active')){
    //   // addedElem.classList.remove('active');
    //   addedElem.innerHTML = 'ALREADY ADDED';
    //   console.log('yes')
    // }
    // addedElem.firstChild.innerHTML = 'ALREADY ADDED';
    self.divAdded = true;
    console.log(self.divAdded)
    this.itemId.push(index);
    console.log(this.itemId)
  }
  removeFromList(index, indexId){
    let addedElem = document.getElementsByClassName('add-to-list');
    addedElem[indexId].firstChild.innerHTML = 'ADD TO LIST'
    addedElem[indexId].classList.remove('active');
    console.log('removing ', indexId)
    this.count -=1
    this.myList.splice(index, 1);
    this.itemId.splice(index, 1)
    console.log(index)
    console.log(this.itemId)
  }
  // openModal(){
  //   let myblank = document.getElementById('blank');
  //   myblank.classList.remove('hidden');
  // }
  closeModal(){
    let myblank = document.getElementById('blank');
    myblank.classList.add('hidden');
  }
  loadMore (dataService) {
    this.displaymore += 4;
  }
}

MyController.$inject = ['dataService'];
export default MyController;
