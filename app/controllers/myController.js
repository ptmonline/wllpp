'use strict';
class MyController {
  constructor(dataService) {
      this.myList = [];
      this.itemId = [];
      this.addedElem = document.getElementsByClassName('add-to-list');
      this.clickElem = document.getElementsByClassName('click-container');
      this.count = 0;
      this.selectedItem;
      this.displaymore = 5;
      dataService.getData()
          .then(result =>
            this.data = result['items']
          );
  }
  addToMyList(item, index){
    this.addedElem[index].firstChild.innerHTML = 'ADDED'
    this.addedElem[index].classList.add('active');
    if(this.clickElem[index].classList.contains('active')){
      return false;
    }else{
      this.myList.push(item);
      this.count +=1;
      this.clickElem[index].classList.add('active');
    }
    this.itemId.push(index);
  }
  removeFromList(index, indexId){
    this.addedElem[indexId].firstChild.innerHTML = 'ADD TO LIST'
    this.addedElem[indexId].classList.remove('active');
    this.clickElem[indexId].classList.remove('active');
    this.count -=1
    this.myList.splice(index, 1);
    this.itemId.splice(index, 1)
  }
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
