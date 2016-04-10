'use strict';
class LayoutController {
  constructor(dataService) {
      this.myList = [];
      this.itemId = [];
      this.count = 0;
      this.selectedItem;
      this.displaymore = 5;
      dataService.getData()
          .then(result =>
            this.data = result['items']
          );
  }
  addToMyList(item, index){
    //TODO: Refactor this
    this.myList.push(item);
    this.count +=1;
    this.itemId.push(index);
  }
  removeFromList(index, indexId){
    //TODO: Refactor this
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

LayoutController.$inject = ['dataService'];
export default LayoutController;
