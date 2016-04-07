'use strict';
class MyController {
  constructor(dataService) {
      this.myList = [];
      this.hello = "Hello Angular";
      this.count = 0;
      this.selectedItem;
      this.displaymore = 4;
      this.dataService = dataService.getData()
          .then(result =>
            this.data = result['items']
          );
      this.reverse;
      this.predicate;
  }
  addSelected(selection){
    this.selectedItem = "ng-model='search." + selection + "'";
    console.log(this.selectedItem)
  }
  order(predicate) {
      this.reverse = (this.predicate === predicate) ? !this.reverse : false;
      this.predicate = predicate;
    };
  addToMyList(item){
    this.count +=1
    this.myList.push(item);
  }
  removeFromList(index){
    this.count -=1
    this.myList.splice(index, 1);
  }
  openModal(){
    let myblank = document.getElementById('blank');
    myblank.classList.remove('hidden');
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
