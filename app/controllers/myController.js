'use strict';
class MyController {
  constructor(dataService) {
      this.myList = [];
      this.itemId = [];
      this.hello = "Hello Angular";
      this.count = 0;
      this.selectedItem;
      this.displaymore = 5;
      dataService.getData()
          .then(result =>
            this.data = result['items']
          );
  }
  addSelected(selection){
    this.selectedItem = "ng-model='search." + selection + "'";
    console.log(this.selectedItem)
  }
  addToMyList(item, index){
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
    this.itemId.push(index);
    console.log(this.itemId)
  }
  removeFromList(index, indexId){
    let addedElem = document.getElementsByClassName('add-to-list');
    let clickElem = document.getElementsByClassName('click-container');
    addedElem[indexId].firstChild.innerHTML = 'ADD TO LIST'
    addedElem[indexId].classList.remove('active');
    clickElem[indexId].classList.remove('active')
    console.log('removing ', indexId)
    this.count -=1
    this.myList.splice(index, 1);
    this.itemId.splice(index, 1)
    console.log(index)
    console.log(this.itemId)
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
