'use strict';
class MyController {
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
    this.myList.push(item);
    this.count +=1;
    this.itemId.push(index);
  }
  removeFromList(index, indexId){
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
