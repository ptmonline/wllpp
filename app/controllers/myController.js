'use strict';
class MyController {
  constructor(dataService) {
      this.myList = [];
      this.hello = "Hello Angular";
      this.dataService = dataService;
      this.count = 0;
      dataService.getData()
          .then(result =>
            this.data = result['items']
          );
      this.reverse;
      this.predicate;
  }
  get(){
    this.dataService.getData()
        .then(result =>
          this.data = result['items']
        );
  }
  order(predicate) {
      this.reverse = (this.predicate === predicate) ? !this.reverse : false;
      this.predicate = predicate;
    };
  addToMyList(item){
    this.count +=1
    this.myList.push(item);
    console.log(this.myList)

  }
  removeFromList(index){
    this.count -=1
    this.myList.splice(index, 1);
    console.log(this.myList)
  }
  openModal(){
    let myblank = document.getElementById('blank');
    myblank.classList.remove('hidden');
  }
  closeModal(){
    let myblank = document.getElementById('blank');
    myblank.classList.add('hidden');
  }
}

MyController.$inject = ['dataService'];
export default MyController;
